from PyQt5.QtWidgets import *
from PyQt5.uic import * 
from PyQt5.QtCore import * 
from PyQt5 import QtSql
from PyQt5 import QtCore

from PyQt5.QtMultimedia import *
from PyQt5.QtMultimediaWidgets import *
from PyQt5.QtTest import *
from PyQt5.QtGui import *

import time
import cv2
import sys
import os

from smbus2 import SMBus


class timeThread(QThread):
    timeSignal = pyqtSignal(str)
    def __init__(self):
        super().__init__()
        
    def run(self):
        while True:
            now = time.localtime()
            self.str_time = ("%02d:%02d:%02d"%(now.tm_hour, now.tm_min, now.tm_sec))
            self.printTime(self.str_time)
            QTest.qWait(100)
        
    def printTime(self, str_time):
        self.timeSignal.emit(self.str_time)

        
class dataThread(QThread):
    dataSignal = pyqtSignal(str)
    def __init__(self):
        super().__init__()
        self.i2c = SMBus(1)
        self.addr = 0x08
        self.numb = 1

        print("Sending Data : {}".format(self.numb))
        self.str_data = ""
        self.i2c.write_byte(self.addr, self.numb)
    def run(self):
        while True:
            self.numb = self.numb + 1
            try:
                b = self.i2c.read_i2c_block_data(self.addr, 0, 30)
            except :
                print("Traback")
            else:
                self.str_data = ""
                for i in range(0,30):
                    if b[i] != 0:
                        self.str_data = self.str_data+ chr(b[i])
                print(b)
                print(self.str_data)
                self.printData(self.str_data)    
            QTest.qWait(100)
        
    def printData(self, str_data):
        self.dataSignal.emit(self.str_data)
        
        


class cameraThread(QThread):
    mySignal = pyqtSignal(QPixmap)
    def __init__(self):
        super().__init__()
        self.cam = cv2.VideoCapture(0)
        self.cam.set(3, 480)
        self.cam.set(4, 320)


    def run(self):
        now = time.localtime()
        idx = 110
        bef = 0
        self.flag = False
        self.sec = now.tm_sec
        while True:
            ret, self.img = self.cam.read()
            
            if int(idx / 5) != int(bef / 5) :  
                self.flag = True
            else :
                self.flag = False
            print("idx : %d, bef : %d"%(idx, bef))
            print(self.flag)
            self.printImage(self.img, int(idx/5), self.flag)
            now = time.localtime()
            print ("%d, %d"%(self.sec, now.tm_sec))
            if self.sec != now.tm_sec :
                idx = 0
                self.sec = now.tm_sec
            bef = idx
            idx = idx +1    
            
            QTest.qWait(10)

    def printImage(self, imgBGR, idx, flag):
        now = time.localtime()
        self.str_file = ("./img/%04d%02d%02d%02d%02d%02d%02d.jpg"%(now.tm_year, now.tm_mon, now.tm_mday, now.tm_hour, now.tm_min, now.tm_sec, idx))
        print(self.str_file)
        imgRGB = cv2.cvtColor(imgBGR, cv2.COLOR_BGR2RGB)
        h, w, byte = imgRGB.shape
        img = QImage(imgRGB, w, h, byte * w, QImage.Format_RGB888)
        img = QPixmap(img)
        if flag == True :
            pass
            cv2.imwrite(self.str_file, imgRGB)
        self.mySignal.emit(img)


class videoThread(QThread):
    mySignal = pyqtSignal()
    def __init__(self):
        super().__init__()
        
    def run(self):
        self.lsj();
        
    def lsj(self):
        fileName = "/home/pi/qt/video/output.h264"
        self.mediaPlayer.setMedia(QMediaContent(QUrl.fromLocalFile(fileName)))
        self.mediaPlayer.setVolume(50)
        self.mediaPlayer.play()
        
    def play(self):
        if self.mediaPlayer.state() == QMediaPlayer.PlayingState:
            self.mediaPlayer.pause()
        else:
            self.mediaPlayer.play()


# class camera(QWidget):
    # def __init__(self):
        # super().__init__()
        # self.setGeometry(0, 0, 600, 400)
        # #loadUi("camera.ui", self)
        # self.pic = QLabel("hello", self)
        # self.pic.setGeometry(100, 10, 300, 200)
        # self.main()


    # def main(self):
        # self.th = cameraThread()
        # self.th.mySignal.connect(self.setImage)
        # self.th.start()

    # def getPicture(self):
        # self.th.start()


    # def setImage(self, img):
        # self.pic.setPixmap(img)



class MyApp(QMainWindow): 
    def __init__(self):
        super().__init__() 
        loadUi("auto_video.ui", self)
        self.player = VideoPlayer(self)
        #self.player.resize(300, 200)
        self.setCentralWidget(self.player)
        #self.videoLayout.addWidget(self.player)

class VideoPlayer(QWidget):

    def __init__(self, parent=None) :
        super(VideoPlayer, self).__init__(parent)
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
        self.lsj()
        
        self.pic = QLabel("hello", self)
        self.pic.setGeometry(750, 100, 240, 160)
        self.main()
        

    def main(self):
        self.th1 = cameraThread()
        self.th1.mySignal.connect(self.setImage)
        self.th1.start()
        #self.lsj()
        
        self.th2 = timeThread()
        self.th2.timeSignal.connect(self.setTime)
        self.th2.start()
        
        self.th3 = dataThread()
        self.th3.dataSignal.connect(self.setData)
        self.th3.start()
    
    def setImage(self, img):
        self.pic.setPixmap(img)
        
    
    def setTime(self, str_time) :
        self.nowTimeLabel.setText("현재 시간  " + str_time)
        # gtnData = str_data.split()
        # self.playTimeLabel.setText(gtnData[0])
        # self.tempLabel.setText(gtnData[1])
        # self.humiLabel.setText(gtnData[2])
        
    def setData(self, str_data) :
        try:
            gtnData = str_data.split()
            self.playTimeLabel.setText("진행 시간  " + gtnData[0])
            self.tempLabel.setText("현재 온도  " + gtnData[1] + "°C")
            self.humiLabel.setText("현재 습도  " + gtnData[2] + "%")
        except:
            print("RECEIVE DATA : {}".format(str_data))


    def lsj(self):
        fileName = "/home/pi/qt/video/output.h264"
        self.mediaPlayer.setMedia(QMediaContent(QUrl.fromLocalFile(fileName)))
        self.mediaPlayer.setVolume(50)
        self.mediaPlayer.play()

    def play(self):
        if self.mediaPlayer.state() == QMediaPlayer.PlayingState:
            self.mediaPlayer.pause()
        else:
            self.mediaPlayer.play()

def main():
    app = QApplication([]) 
    #win = MyApp() 
    #win.show()
    win = VideoPlayer()
    win_thread = QThread()
    win.setWindowTitle("Player")
    win.resize(600, 400)
    win.showFullScreen()
    
 
    
    # cam = camera()
    # cam.show()
    app.exec()

if __name__ == "__main__":
    # execute only if run as a script
    main()


