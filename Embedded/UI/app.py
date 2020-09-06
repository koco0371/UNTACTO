from PyQt5.QtWidgets import *
from PyQt5.uic import *
from PyQt5.QtCore import *
from PyQt5 import QtSql
from PyQt5 import QtCore

from PyQt5.QtMultimedia import *
from PyQt5.QtMultimedia import QSound
from PyQt5.QtMultimediaWidgets import *
from PyQt5.QtTest import *
from PyQt5.QtGui import *

import time
import cv2
import sys
import os
import subprocess


import random

from smbus import SMBus

# image upload to firebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import storage
from uuid import uuid4

import requests
import json


# default setting


global img_list
global url_list
global emo_list

img_list = []
url_list = []
emo_list = []


global test
test = False


play_time = 1
temp_sensor = 2
humi_sensor = 4
left_sensor = 8
right_sensor = 16
wear_mask = False
hand_emotion = True

PROJECT_ID = "kiosk-69866"

cred = credentials.Certificate("/home/pi/key/ServiceAccountKey.json")
default_app = firebase_admin.initialize_app(cred, {
    'storageBucket': f"{PROJECT_ID}.appspot.com"
})

bucket = storage.bucket()

f = []
video_count = 0


#numb = 0x1
i2c = SMBus(1)
addr = 0x08
first = True


video_list = []
query_list = []
current_sid = 0


def init():
    local_file_list = []
    res = ""
    str_file = subprocess.check_output(["ls", "/home/pi/Videos"])

    for ch in str_file:
        if ch == 10:
            local_file_list.append(res)
            res = ""
        else:
            res = res + chr(ch)

    remove_list = local_file_list
    kioskId = open("/etc/kiosk/kioskId").read()
    kioskId = int(kioskId)
    db = QtSql.QSqlDatabase.addDatabase('QMYSQL')
    db.setHostName("<IP>")
    db.setDatabaseName("project1")
    db.setUserName("admin")
    db.setPassword("<PASSWD>")
    db.setPort(3306)
    ok = db.open()

    query = QtSql.QSqlQuery(
        "select surveyId, userId, kioskId, video, videoPath from survey where kioskId = %d" % (kioskId))
    global video_count
    while (query.next()):
        record = query.record()
        #getData = "%d | %d | %d | %s | %s" % (record.value(0), record.value(1), record.value(2), record.value(3), record.value(4))

        row = []
        for i in range(5):
            row.append(record.value(i))
        sid = record.value(0)

        video_count = video_count + 1
        file_name = '%s_%s' % (record.value(0), record.value(3))
        downloadPath = '/home/pi/Videos/%s' % (file_name)
        global video_list
        video_list.append(downloadPath+'.h264')
        if file_name+'.h264' not in local_file_list:

            # #local_file_list.remove(file_name)

            url = 'http://i3a103.p.ssafy.io:8080/api/download/' + str(sid)
            r = requests.get(url, allow_redirects=True)

            open(downloadPath, 'wb').write(r.content)

            os.system("ffmpeg -i %s %s" % (downloadPath, downloadPath+'.h264'))
            remove_list.append(file_name)
            time.sleep(1)
        else:
            remove_list.remove(file_name+'.h264')
    print(local_file_list)
    for removedFile in remove_list:
        os.system("rm /home/pi/Videos/" + removedFile)


def captureFileUpload(file):
    global url_list

    blob = bucket.blob(file)
    new_token = uuid4()
    metadata = {"firebaseStorageDownloadTokens": new_token}
    blob.metadata = metadata

    # upload file
    blob.upload_from_filename(
        filename='/home/pi/upload/'+file, content_type='image/jpeg')
    img_url = 'https://firebasestorage.googleapis.com/v0/b/' + PROJECT_ID + \
        '.appspot.com/o/' + file + '?alt=media&token=' + str(new_token)
    url_list.append(img_url)
    # print(blob.public_url)


subscription_key = "<SUBSCRIPTION KEY>"
face_api_url = '<API_URL>'


def getEmotionData():
    global url_list
    global emo_list
    headers = {'Ocp-Apim-Subscription-Key': subscription_key}

    params = {
        'returnFaceId': 'true',
        'returnFaceLandmarks': 'false',
        # 'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise',
        'returnFaceAttributes': 'emotion',
    }

    for img_url in url_list:
        response = requests.post(
            face_api_url, params=params, headers=headers, json={"url": img_url})
        emo_result = json.dumps(response.json())
        emo_result = emo_result[emo_result.find("emotion"):]
        emo_result = emo_result[emo_result.find("{"):]
        emo_result = emo_result[:emo_result.find("}")+1]
        print(emo_result)
        emo_list.append(emo_result)


def sendingQuery():
    global emo_list
    db = QtSql.QSqlDatabase.addDatabase('QMYSQL')
    db.setHostName("<IP>")
    db.setDatabaseName("project1")
    db.setUserName("admin")
    db.setPassword("<PASSWD>")
    db.setPort(3306)
    ok = db.open()
    print(ok)
    query = QtSql.QSqlQuery("select * from answer")

    ramd_surveyId = current_sid
    ramd_userID = 0

    for idx in range(len(query_list)):
        if query_list[idx][0] == current_sid:
            ramd_userID = query_list[idx][1]

    ramd_customerId = -1
    idx = 1

    now = time.localtime()
    str_time = ("%04d-%02d-%02d %02d:%02d:%02d" % (now.tm_year,
                                                   now.tm_mon, now.tm_mday, now.tm_hour, now.tm_min, now.tm_sec))
    str_time = str(str_time)

    for str_emotion in emo_list:
        query.prepare("INSERT INTO answer (surveyId, userID, customerId, emotions, createdAt, timeIndex) VALUES(:surveyId, :userID, :customerId, :emotions, :createdAt, :timeIndex)")
        query.bindValue(":surveyId", ramd_surveyId)
        query.bindValue(":userID", ramd_userID)
        query.bindValue(":customerId", ramd_customerId)
        if wear_mask == False:
            query.bindValue(":emotions", str_emotion)
        else:
            if hand_emotion == False:
                query.bindValue(
                    ":emotions", '{"anger": 0.0, "contempt": 0.0, "disgust": 0.0, "fear": 0.0, "happiness": 1.0, "neutral": 0.0, "sadness": 0.0, "surprise": 0.0}')
            else:
                query.bindValue(
                    ":emotions", '{"anger": 1.0, "contempt": 0.0, "disgust": 0.0, "fear": 0.0, "happiness": 0.0, "neutral": 0.0, "sadness": 0.0, "surprise": 0.0}')
        query.bindValue(":createdAt", str_time)

        query.bindValue(":timeIndex", idx)
        idx = idx+1

        #str_time =  QDateTime().currentDateTime()
        # print(str_time)

        if str_emotion != "":
            query.exec_()
        print("sending query complement")

#####################################################################################################
############################################## Threads ##############################################
#####################################################################################################


class surveyFinishThread(QThread):
    def __init__(self):
        super().__init__()

    def run(self):
        print(img_list)
        for img in img_list:
            print("upload img")
            captureFileUpload(img)
        getEmotionData()
        sendingQuery()


global timeThreadLoop
timeThreadLoop = True


class timeThread1(QThread):
    timeSignal = pyqtSignal(str)

    def __init__(self):
        super().__init__()
        print("timeThread1 start")
        global timeThreadLoop
        timeThreadLoop = True

    def run(self):
        print("timeThread1 loop")
        while True:
            if timeThreadLoop == True:

                now = time.localtime()
                self.str_time = ("%02d:%02d:%02d" %
                                 (now.tm_hour, now.tm_min, now.tm_sec))
                self.printTime(self.str_time)
                QTest.qWait(100)
            else:
                print("timeThreadLoop exit1")
                break

    def printTime(self, str_time):
        self.timeSignal.emit(self.str_time)


class timeThread2(QThread):
    timeSignal = pyqtSignal(str)

    def __init__(self):
        super().__init__()
        print("timeThread2 start")
        global timeThreadLoop
        timeThreadLoop = True

    def run(self):
        while True:
            if timeThreadLoop == True:

                now = time.localtime()
                self.str_time = ("%02d:%02d:%02d" %
                                 (now.tm_hour, now.tm_min, now.tm_sec))
                self.printTime(self.str_time)
                QTest.qWait(100)
            else:
                print("timeThreadLoop exit2")
                break

    def printTime(self, str_time):
        self.timeSignal.emit(self.str_time)


dataThreadLoop = True
before_b = [48, 48, 58, 48, 48, 58, 48, 48, 32, 51, 51, 46, 52,
            48, 32, 52, 57, 46, 48, 48, 32, 48, 32, 48, 0, 0, 0, 0, 0, 0]


def atoc(b):
    str_data = ""
    for i in range(0, 30):
        if b[i] == 0:
            break
        str_data = str_data + chr(b[i])
    return str_data


class dataThread(QThread):
    dataSignal = pyqtSignal(str)
    initSuccessGetSignal = pyqtSignal(str)

    def __init__(self):
        super().__init__()

    def run(self):
        global before_b
        global dataThreadLoop
        global addr
        global i2c
        dataThreadLoop = True

        self.str_data = ""
        while dataThreadLoop == True:
            try:
                b = i2c.read_i2c_block_data(addr, 0, 30)
            except:
                b = before_b
            else:
                before_b = b
            self.str_data = atoc(b)

            self.printData(self.str_data)
            QTest.qWait(300)

    def printData(self, str_data):
        self.dataSignal.emit(self.str_data)


class faceCheckThread(QThread):
    faceSignal = pyqtSignal(str)

    def __init__(self):
        super().__init__()
        self.detect(self.str_face_path)

    def detect(self, str_face_path):
        face_cascade = cv2.CascadeClassifier(
            '/home/pi/.local/lib/python3.7/site-packages/cv2/data/haarcascade_frontalcatface.xml')
        eye_cascade = cv2.CascadeClassifier(
            '/home/pi/.local/lib/python3.7/site-packages/cv2/data/haarcascade_eye.xml')
        face_classifier = cv2.CascadeClassifier(
            '/home/pi/.local/lib/python3.7/site-packages/cv2/data/haarcascade_frontalface_default.xml')

        src = cv2.imread(str_face_path)
        src_gray = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(src_gray, 1.3, 3)

        for x, y, w, h in faces:
            cv2.rectangle(src, (x, y), (x + w, y + h), (255, 0, 0), 2)
            face = src[y: y + h, x: x + w]
            face_gray = src_gray[y: y + h, x: x + w]
            eyes = eye_cascade.detectMultiScale(face_gray)
            for (ex, ey, ew, eh) in eyes:
                cv2.rectangle(face, (ex, ey),
                              (ex + ew, ey + eh), (0, 255, 0), 2)

        cv2.imwrite('/home/pi/qt/img/output.jpg', src)

        isface = face_classifier.detectMultiScale(src_gray, 1.3, 5)

        if isface is ():
            print("None")
        else:
            print("Face On")


class imageUploadThraed(QThread):
    def __init__(self):
        super().__init__()
        pass


class videoStateThread(QThread):
    stateSignal = pyqtSignal()

    def __init__(self):
        super().__init__()

    def run(self):
        while True:
            self.printStatus()
            QTest.qWait(1000)

    def printStatus(self):
        self.stateSignal.emit()


cameraThreadLoop = True


class cameraThread(QThread):
    def __init__(self):
        super().__init__()
        self.cam = cv2.VideoCapture(0)
        self.cam.set(3, 480)
        self.cam.set(4, 320)

    def run(self):
        now = time.localtime()
        idx = 0
        bef = 0
        self.flag = False
        self.sec = now.tm_sec

        global cameraThreadLoop
        while True:
            if cameraThreadLoop == True:
                ret, self.img = self.cam.read()

                if int(idx / 5) != int(bef / 5):
                    self.flag = True
                else:
                    self.flag = False

                try:
                    self.printImage(self.img, int(idx/5), self.flag)
                except:
                    self.cam.release()
                    self.exit()
                now = time.localtime()
                if self.sec != now.tm_sec:
                    idx = 0
                    self.sec = now.tm_sec
                bef = idx
                idx = idx + 1

                QTest.qWait(10)
            if cameraThreadLoop == False:
                break

    def printImage(self, imgBGR, idx, flag):
        global img_list
        now = time.localtime()
        self.str_file = ("%04d%02d%02d%02d%02d%02d%02d.jpg" % (
            now.tm_year, now.tm_mon, now.tm_mday, now.tm_hour, now.tm_min, now.tm_sec, idx))
        # print(self.str_file)
        imgRGB = cv2.cvtColor(imgBGR, cv2.COLOR_BGR2RGB)
        h, w, byte = imgRGB.shape
        img = QImage(imgRGB, w, h, byte * w, QImage.Format_RGB888)
        img = QPixmap(img.scaled(240, 160))
        #img = cv2.rectangle(img, (100,60), (140,100),(0,0,255), 2)

        if flag == True:
            cv2.imwrite("/home/pi/img/" + self.str_file, imgRGB)
            if idx == 1:
                upload_file_path = "/home/pi/upload/" + self.str_file
                cv2.imwrite(upload_file_path, imgRGB)
                img_list.append(self.str_file)


global setLocationCameraThreadLoop
setLocationCameraThreadLoop = True


class setLocationCameraThread(QThread):
    mySignal = pyqtSignal(QPixmap)

    def __init__(self):
        super().__init__()
        self.cam = cv2.VideoCapture(0)
        self.cam.set(3, 960)
        self.cam.set(4, 640)
        global setLocationCameraThreadLoop
        setLocationCameraThreadLoop = True

    def run(self):
        global setLocationCameraThreadLoop
        while True:
            if setLocationCameraThreadLoop == True:
                ret, self.img = self.cam.read()
                self.printImage(self.img)
                QTest.qWait(10)
            else:
                break

    def printImage(self, imgBGR):
        now = time.localtime()
        imgRGB = cv2.cvtColor(imgBGR, cv2.COLOR_BGR2RGB)
        h, w, byte = imgRGB.shape
        img = QImage(imgRGB, w, h, byte * w, QImage.Format_RGB888)
        img = QPixmap(img.scaled(960, 640))
        self.mySignal.emit(img)


class timeWaitThread(QThread):
    timeWaitSignal = pyqtSignal()

    def __init__(self, wait_sec):
        super().__init__()
        self.wait_sec = wait_sec

    def run(self):
        QTest.qWait(self.wait_sec)
        self.timeWaitSignal.emit()


maskDataLoop = True


class getMaskData(QThread):
    dataSignal = pyqtSignal(int)

    def __init__(self):
        super().__init__()

    def run(self):
        global maskDataLoop
        global addr
        global i2c
        maskDataLoop = True

        self.str_data = ""
        self.left_sum = 0
        self.right_sum = 0

        while maskDataLoop == True:
            while True:
                try:
                    b = i2c.read_i2c_block_data(addr, 0, 30)
                except:
                    QTest.qWait(200)
                else:
                    break

            self.str_data = atoc(b)

            print(self.str_data)
            str_datas = self.str_data.split()
            if str_datas[3] == '1' and str_datas[4] == '0':
                print("right!")
                self.right_sum = self.right_sum + 1
            elif str_datas[3] == '0' and str_datas[4] == '1':
                print("left!")
                self.left_sum = self.left_sum + 1

            if self.right_sum >= 5:
                self.answerData(1)
            if self.left_sum >= 5:
                self.answerData(2)

            QTest.qWait(300)

    def answerData(self, answer):
        global maskDataLoop
        maskDataLoop = False
        QTest.qWait(300)
        self.dataSignal.emit(answer)


#####################################################################################################
#####################################################################################################
########################################### Main Widgets ############################################
#####################################################################################################
videoIdx = 0
current_idx = 0
#video_list = ['/home/pi/Videos/video1.h264', '/home/pi/Videos/video2.h264']


class VideoPlayer(QWidget):
    closeSignal = pyqtSignal()

    def __init__(self, parent=None):
        super(VideoPlayer, self).__init__(parent)

        sending_data = 1

        global i2c
        while True:
            while True:
                try:
                    i2c.write_byte(addr, sending_data)
                except:
                    time.sleep(0.3)
                else:
                    break
            time.sleep(0.3)
            get_data = atoc(i2c.read_i2c_block_data(addr, 0, 32))
            get_data = get_data.split()
            try:
                if get_data[0] == "00:00:00":
                    break
                else:
                    time.sleep(0.3)
            except:
                print("print get_data")
                print(get_data)

        global current_idx
        self.setAttribute(Qt.WA_DeleteOnClose)
        self.setGeometry(0, 0, 1024, 768)
        self.mediaPlayer = QMediaPlayer(None, QMediaPlayer.VideoSurface)
        videoWidget = QVideoWidget()
        top = QHBoxLayout()
        emptybox1 = QLabel("", self)
        emptybox2 = QLabel("", self)
        emptybox3 = QLabel("", self)
        emptybox4 = QLabel("", self)
        self.nowTimeLabel = QLabel("", self)
        self.tempLabel = QLabel("Temp", self)
        self.humiLabel = QLabel("Humi", self)

        emptybox1.setStyleSheet("background: url(untacto.png) no-repeat center;"
                                "background-size: contain;")
        self.nowTimeLabel.setStyleSheet("color: #212529;"
                                        "font-weight:900;"
                                        "font-size:1rem;"
                                        "font-family: 'Nanum Gothic', sans-serif")
        # self.playTimeLabel.setStyleSheet("color: #212529;"
        # "font-weight:900;"
        # "font-size:1rem;"
        # "font-family: 'Nanum Gothic', sans-serif")

        self.tempLabel.setStyleSheet("color: #212529;"
                                     "font-weight:900;"
                                     "font-size:1rem;"
                                     "font-family: 'Nanum Gothic', sans-serif")
        self.humiLabel.setStyleSheet("color: #212529;"
                                     "font-weight:900;"
                                     "font-size:1rem;"
                                     "font-family: 'Nanum Gothic', sans-serif")

        top.addWidget(emptybox1)
        top.addWidget(self.nowTimeLabel)
        top.addWidget(self.tempLabel)
        top.addWidget(self.humiLabel)
        top.addWidget(emptybox3)

        layout = QVBoxLayout()
        layout.addLayout(top)
        layout.addWidget(videoWidget)
        self.setLayout(layout)
        self.mediaPlayer.setVideoOutput(videoWidget)
        current_idx = 0
        self.playVideo()

        self.main()

    def main(self):
        self.th2 = timeThread1()
        self.th2.timeSignal.connect(self.setTime)
        self.th2.start()

        # self.th = startData()
        # self.th.start()

        self.th3_video = dataThread()
        self.th3_video.dataSignal.connect(self.setData)
        self.th3_video.start()

        self.th4 = videoStateThread()
        self.th4.stateSignal.connect(self.printVideoState)
        self.th4.start()

    def setTime(self, str_time):
        self.nowTimeLabel.setText("현재 시간  " + str_time)

    def setData(self, str_data):
        try:
            gtnData = str_data.split()
            print(str_data)
            self.tempLabel.setText("현재 온도  " + gtnData[1] + "°C")
            self.humiLabel.setText("현재 습도  " + gtnData[2] + "%")
        except:
            pass
            #print("RECEIVE DATA : {}".format(str_data))

    def playVideo(self):
        #fileName = "/home/pi/qt/video/output.mp4"
        global video_list
        global current_idx
        print(video_list)
        print(current_idx)
        self.fileName = video_list[current_idx]
        self.mediaPlayer.setMedia(QMediaContent(
            QUrl.fromLocalFile(self.fileName)))
        self.mediaPlayer.setVolume(50)
        self.mediaPlayer.play()

    def play(self):
        if self.mediaPlayer.state() == QMediaPlayer.PlayingState:
            self.mediaPlayer.pause()
        else:
            self.mediaPlayer.play()

    # if screen touched start vote
    def mousePressEvent(self, e):  # e ; QMouseEvent
        global timeThreadLoop
        global dataThreadLoop
        global current_sid

        li = self.fileName.split('_')
        print(li)
        current_sid = int(li[0].strip("/home/pi/Videos/"))

        #global i2c
        timeThreadLoop = False
        dataThreadLoop = False
        # i2c.close()
        # self.th3_video.i2c.close()
        # self.th2.exit()
        self.th3_video.exit()
        self.th4.exit()

        self.closeSignal.emit()

    def printVideoState(self):
        if self.mediaPlayer.state() == QMediaPlayer.StoppedState:
            global current_idx
            global video_count

            current_idx = (current_idx + 1) % video_count
            self.playVideo()

    # def closeEvent(self, e):
        # self.th2.exit()
        # #self.th3_video.exit()
        # self.th4.exit()
        # print("VideoPlayer close")
        # self.closeSignal.emit()


class Guide(QWidget):
    closeSignal = pyqtSignal()

    def __init__(self):
        super().__init__()
        self.setAttribute(Qt.WA_DeleteOnClose)
        self.main()

    def main(self):
        self.guide = QLabel("화면안에 얼굴을 고정시켜 주세요", self)
        self.guide.setGeometry(230, 0, 564, 100)
        self.guide.setStyleSheet("font-size:30pt;")
        self.guide.setAlignment(Qt.AlignCenter)
        self.pic = QLabel("", self)
        self.pic.setGeometry(32, 108, 960, 640)

        self.th1 = setLocationCameraThread()
        self.th1.mySignal.connect(self.setImage)
        self.th1.start()

        self.th2 = timeWaitThread(7000)
        self.th2.timeWaitSignal.connect(self.getAlram)
        self.th2.start()

        # QTest.qWait(3000)

    def getAlram(self):
        global setLocationCameraThreadLoop
        setLocationCameraThreadLoop = False
        self.closeSignal.emit()

    def setImage(self, img):
        self.pic.setPixmap(img)

    def closeEvent(self, e):
        self.th1.cam.release()
        cameraThreadLoop = False
        self.th1.exit()
        self.th2.exit()


class Mask(QWidget):
    closeSignal = pyqtSignal()

    def __init__(self):
        super().__init__()

        sending_data = 1

        global i2c
        while True:
            try:
                i2c.write_byte(addr, sending_data)
            except:
                time.sleep(0.3)
            else:
                break
        time.sleep(0.3)

        self.th1 = getMaskData()
        self.th1.dataSignal.connect(self.getAnswer)
        self.th1.start()

        self.main()

    def main(self):
        self.guide = QLabel("마스크를 착용하였습니까?", self)
        self.guide.setGeometry(230, 0, 564, 100)
        self.guide.setStyleSheet("font-size:30pt;")
        self.guide.setAlignment(Qt.AlignCenter)

        self.guide = QLabel("< 예                                아니요 >", self)
        # self.guide.setPixmap(QPixmap("choose.png").scaledToWidth(1024))
        #self.guide.setGeometry(0, 200, 1024, 400)
        self.guide.setGeometry(230, 400, 564, 100)
        self.guide.setStyleSheet("font-size:30pt;")
        self.guide.setAlignment(Qt.AlignCenter)

    def getAnswer(self, ans):
        print(ans)
        global wear_mask
        if ans == 1:
            print("MASK NO")
            wear_mask = False
        else:
            print("MASK YES")
            wear_mask = True
        self.getAlram()

    def getAlram(self):
        global maskDataLoop
        maskDataLoop = False
        self.closeSignal.emit()


class SurveyVideo(QWidget):
    closeSignal = pyqtSignal()

    def __init__(self, parent=None):
        super(SurveyVideo, self).__init__(parent)
        sending_data = 1

        global i2c
        while True:
            while True:
                try:
                    i2c.write_byte(addr, sending_data)
                except:
                    time.sleep(0.3)
                else:
                    break
            time.sleep(0.3)
            try:
                b = i2c.read_i2c_block_data(addr, 0, 32)
                self.get_data = atoc(b)
                self.get_data = self.get_data.split()
            except:
                time.sleep(0.3)
            else:
                if self.get_data[0] == "00:00:00":
                    break
                else:
                    time.sleep(0.3)

        self.setGeometry(0, 0, 1024, 768)
        self.mediaPlayer = QMediaPlayer(None, QMediaPlayer.VideoSurface)
        videoWidget = QVideoWidget()
        top = QHBoxLayout()
        emptybox1 = QLabel("", self)
        emptybox2 = QLabel("", self)
        emptybox3 = QLabel("", self)
        emptybox4 = QLabel("", self)
        self.nowTimeLabel = QLabel("", self)
        self.playTimeLabel = QLabel("PlayTime", self)
        self.tempLabel = QLabel("Temp", self)
        self.humiLabel = QLabel("Humi", self)
        self.overlap_signal_cancle = False

        emptybox1.setStyleSheet("background: url(untacto.png) no-repeat center;"
                                "background-size: contain;")
        self.nowTimeLabel.setStyleSheet("color: #212529;"
                                        "font-weight:900;"
                                        "font-size:1rem;"
                                        "font-family: 'Nanum Gothic', sans-serif")
        self.playTimeLabel.setStyleSheet("color: #212529;"
                                         "font-weight:900;"
                                         "font-size:1rem;"
                                         "font-family: 'Nanum Gothic', sans-serif")

        self.tempLabel.setStyleSheet("color: #212529;"
                                     "font-weight:900;"
                                     "font-size:1rem;"
                                     "font-family: 'Nanum Gothic', sans-serif")
        self.humiLabel.setStyleSheet("color: #212529;"
                                     "font-weight:900;"
                                     "font-size:1rem;"
                                     "font-family: 'Nanum Gothic', sans-serif")

        top.addWidget(emptybox1)
        top.addWidget(self.nowTimeLabel)
        top.addWidget(self.playTimeLabel)
        top.addWidget(self.tempLabel)
        top.addWidget(self.humiLabel)
        top.addWidget(emptybox3)

        layout = QVBoxLayout()
        layout.addLayout(top)
        layout.addWidget(videoWidget)
        self.setLayout(layout)
        self.mediaPlayer.setVideoOutput(videoWidget)
        self.playVideo()

        self.main()

    def main(self):
        self.th1 = cameraThread()
        self.th1.start()

        self.th2 = timeThread2()
        self.th2.timeSignal.connect(self.setTime)
        self.th2.start()

        # .th = startData()
        # self.th.start()

        self.th3 = dataThread()
        self.th3.dataSignal.connect(self.setData)
        self.th3.start()

        self.th4 = videoStateThread()
        self.th4.stateSignal.connect(self.checkVideoState)
        self.th4.start()

    def checkVideoState(self):
        if self.overlap_signal_cancle == False:
            if self.mediaPlayer.state() == QMediaPlayer.StoppedState:
                self.overlap_signal_cancle = True
                global timeThreadLoop
                global cameraThreadLoop
                timeThreadLoop = False
                cameraThreadLoop = False

                self.closeSignal.emit()

    def setTime(self, str_time):
        self.nowTimeLabel.setText("현재 시간  " + str_time)

    def setData(self, str_data):
        try:
            gtnData = str_data.split()
            self.playTimeLabel.setText("진행 시간  " + gtnData[0])
            self.tempLabel.setText("현재 온도  " + gtnData[1] + "°C")
            self.humiLabel.setText("현재 습도  " + gtnData[2] + "%")
        except:
            pass

    def playVideo(self):
        global video_list
        global current_idx
        print(current_idx)
        fileName = video_list[current_idx]
        self.mediaPlayer.setMedia(QMediaContent(QUrl.fromLocalFile(fileName)))
        self.mediaPlayer.setVolume(50)
        self.mediaPlayer.play()

    def closeEvent(self, e):
        global dataThreadLoop
        dataThreadLoop = False
        self.th1.cam.release()

        self.th1.exit()
        self.th2.exit()
        self.th3.exit()
        self.th4.exit()


# class getEmotionByHand(QWidget):
    # def __init__(self) :
        # super().__init__()
        # # self.th1 = dataThread()
        # # self.th1.dataSignal.connect(self.setData)
        # # self.th.start()
        # self.setGeometry(0,0,1024,768)


class getEmotionByHand(QWidget):
    closeSignal = pyqtSignal()

    def __init__(self):
        super().__init__()

        sending_data = 1

        global i2c
        while True:
            try:
                i2c.write_byte(addr, sending_data)
            except:
                time.sleep(0.3)
            else:
                break
        time.sleep(0.3)

        self.th1 = getMaskData()
        self.th1.dataSignal.connect(self.getAnswer)
        self.th1.start()

        self.main()

    def main(self):
        self.guide = QLabel("광고에 대한 평가를 해주세요?", self)
        self.guide.setGeometry(230, 0, 564, 100)
        self.guide.setStyleSheet("font-size:30pt;")
        self.guide.setAlignment(Qt.AlignCenter)

        self.guide.setPixmap(QPixmap("choose.png").scaledToWidth(1024))
        self.guide.setGeometry(0, 200, 1024, 400)
        #self.guide.setGeometry(230, 400, 564, 100)
        self.guide.setStyleSheet("font-size:40pt;")
        self.guide.setAlignment(Qt.AlignCenter)

    def getAnswer(self, ans):
        print(ans)
        global hand_emotion
        if ans == 1:
            print("NO LIKE")
            hand_emotion = True
        else:
            print("LIKE")
            hand_emotion = False
        self.getAlram()

    def getAlram(self):
        global maskDataLoop
        maskDataLoop = False
        self.closeSignal.emit()


class GetInfo(QWidget):

    closeSignal = pyqtSignal()
    proc = 0

    def __init__(self):
        super().__init__()
        self.setAttribute(Qt.WA_DeleteOnClose)
        self.th1 = timeWaitThread(40000)
        self.th1.timeWaitSignal.connect(self.timeOut)
        self.th2 = surveyFinishThread()

        self.proc = subprocess.Popen(["chromium-browser", "--disable-restore-session-state",
                                      "--start-maxximized", "--kiosk", "http://i3a103.p.ssafy.io/customerlogin"])
        #self.proc = subprocess.Popen(["chromium-browser", "--start-maxximized", "--kiosk", "https://www.naver.com"])
        self.th1.start()
        self.th2.start()

    def timeOut(self):
        self.th1.exit()
        self.th2.exit()
        self.proc.kill()
        self.closeSignal.emit()


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        print("window init")
        self.setGeometry(QRect(0, 0, 1024, 768))
        self.setStyleSheet("background-color : black")
        self.label = QLabel("잠시만 기다려주세요")
        self.setCentralWidget(self.label)
        self.label.setStyleSheet("font-size:80pt")
        self.label.setGeometry(130, 30, 1000, 80)
        self.label.setAlignment(Qt.AlignCenter)
        # self.th3_main = dataThread()
        # self.th3_main.start()

        self.advPlay()

    def main(self):
        print("start main")
        self.advPlay()

    def advPlay(self):
        self.player = VideoPlayer(self)

        # self.th3_main.dataSignal.connect(self.player.setData)

        self.player.setGeometry(QRect(0, 0, 1024, 768))
        self.player.showFullScreen()
        print("VideoPlayer")
        self.player.closeSignal.connect(self.guideCameraLine)

    def guideCameraLine(self):
        self.player.close()
        print("VideoPlayer close")
        self.guide = Guide()
        self.guide.setGeometry(QRect(0, 0, 1024, 768))
        self.guide.showFullScreen()
        print("Guidedddd")
        # self.guide.closeSignal.connect(self.surveyStart)
        self.guide.closeSignal.connect(self.ifMask)

    def ifMask(self):
        self.guide.close()
        self.mask = Mask()
        self.mask.setGeometry(QRect(0, 0, 1024, 768))
        self.mask.showFullScreen()
        print("Mask")
        self.mask.closeSignal.connect(self.surveyStart)

    # def surveyStart(self):
        # self.guide.close()
        # print("Guide close")
        # self.survey = SurveyVideo(self)
        # print("SurveyVideo")

        # # self.th3_main.dataSignal.connect(self.survey.setData)

        # self.survey.setGeometry(QRect(0,0,1024,768))
        # self.survey.showFullScreen()
        # self.survey.closeSignal.connect(self.getCustomerInfo)

    def surveyStart(self):
        self.mask.close()
        print("mask close")
        self.survey = SurveyVideo(self)
        print("SurveyVideo")

        # self.th3_main.dataSignal.connect(self.survey.setData)

        self.survey.setGeometry(QRect(0, 0, 1024, 768))
        self.survey.showFullScreen()
        # self.survey.closeSignal.connect(self.getCustomerInfo)
        self.survey.closeSignal.connect(self.branch)

    def branch(self):
        if wear_mask == True:
            self.usingMask()
        else:
            self.getCustomerInfo()

    def usingMask(self):
        self.survey.close()
        print("survey close")
        self.emo = getEmotionByHand()
        self.emo.setGeometry(QRect(0, 0, 1024, 768))
        self.emo.showFullScreen()
        self.emo.closeSignal.connect(self.getCustomerInfo)

    def getCustomerInfo(self):
        if wear_mask == True:
            self.emo.close()
        else:
            self.survey.close()
        self.getinfo = GetInfo()
        self.getinfo.closeSignal.connect(self.restart)

    def restart(self):
        self.getinfo.close()
        os.system("rm /home/pi/img/* /home/pi/upload/*")
        global url_list
        global emo_list
        global img_list
        img_list = []
        url_list = []
        emo_list = []
        self.advPlay()


#####################################################################################################

#####################################################################################################
##############################################TEST AREA##############################################
#####################################################################################################

#####################################################################################################

def main():
    print("start main()")
    init()
    app = QApplication([])
    app.setStyleSheet("background-color:black;")
    win = MainWindow()
    win.setWindowTitle("KIOSK")
    win.setStyleSheet("background-color:white;")
    win.setGeometry(0, 0, 1024, 768)
    win.showFullScreen()
    app.exec()


if __name__ == "__main__":
    # execute only if run as a script
    print("main start")
    main()
