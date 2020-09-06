from PyQt5.QtWidgets import *
from PyQt5.uic import * 
from PyQt5.QtCore import * 
from PyQt5 import QtSql

import time
import requests
import json

class MyApp(QMainWindow): 
    def __init__(self):
        super().__init__() 

        self.db = QtSql.QSqlDatabase.addDatabase('QMYSQL') 
        self.db.setHostName("i3a103.p.ssafy.io") 
        self.db.setDatabaseName("project1") 
        self.db.setUserName("admin") 
        self.db.setPassword("a103")
        self.db.setPort(3306)
        ok = self.db.open()
        print(ok)
        self.main()
    
    def main(self):
        # self.query = QtSql.QSqlQuery("select * from answer");
        # while (self.query.next()): 
            # self.record = self.query.record()
            # getstr = "%2d | %2d | %2d | %17s | %17s" % (self.record.value(0), self.record.value(1), self.record.value(2), self.record.value(3), self.record.value(4))
            # print(getstr)
            
        str_emotion = self.getData()
        print("get data complement")
   
        print(str_emotion)
        # self.query.prepare("INSERT INTO answer (surveyId, userID, customerId, emotions, createdAt) VALUES(:surveyId, :userID, :customerId, :emotions, :createdAt)")
        # self.query.bindValue(":surveyId", 1) 
        # self.query.bindValue(":userID", 1) 
        # self.query.bindValue(":customerId", 1) 
        # self.query.bindValue(":emotions", str_emotion)
        
        # now = time.localtime()
        # str_time = ("%04d-%02d-%02d %02d:%02d:%02d"%(now.tm_year, now.tm_mon, now.tm_mday, now.tm_hour, now.tm_min, now.tm_sec))
        # self.query.bindValue(":createdAt", str_time) 
        # str_time =  QDateTime().currentDateTime()
        # print(str_time)

        # self.query.exec_()
        # print("sending query complement")
    
    def getData(self):
        subscription_key = "9aa511635daf4014901a9afbf07134b8"
        face_api_url = 'https://leesj.cognitiveservices.azure.com//face/v1.0/detect'
        image_url = 'http://www.hellot.net/admin/crosseditor_3.5.0.06/binary/images/000072/20180125101802828_Y5KPHXXQ.jpg'
        headers = {'Ocp-Apim-Subscription-Key': subscription_key}
        params = {
            'returnFaceId': 'true',
            'returnFaceLandmarks': 'false',
            #'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise',
            'returnFaceAttributes' : 'emotion',
        }
        response = requests.post(face_api_url, params=params, headers=headers, json={"url": image_url})
        #print(json.dumps(response.json()))
        return json.dumps(response.json())

app = QApplication([])     
app.setStyleSheet("background-color:black;")  
win = MyApp() 
win.show() 
win.setStyleSheet("background-color:white;")
app.exec()
