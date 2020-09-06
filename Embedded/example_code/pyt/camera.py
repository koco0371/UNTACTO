# This Python file uses the following encoding: utf-8
import sys
#from PyQt5.QtWidgets import *
#from PyQt5.uic import *
from PyQt5.QtGui import *
#import cv2
from PyQt5.QtTest import *
from PyQt5.QtWidgets import *
from PyQt5.uic import *
from PyQt5.QtCore import *
from time import sleep
#from PyQt5 import QtSql
#from PyQt5 import QtWebEngineWidgets
from PyQt5.QtMultimedia import *
#from PyQt5.QtMultimediaWidgets import *
#from PyQt5.QtGui import QIcon, QFont
#from PyQt5.QtCore import QDir, Qt, QUrl, QSize
#from PyQt5.QtMultimedia import QMediaContent, QMediaPlayer
#from PyQt5.QtMultimediaWidgets import QVideoWidget
#from PyQt5.QtWidgets import QApplication, QFileDialog, QHBoxLayout, QLabel, QPushButton, QSizePolicy, QSlider, QStyle, QVBoxLayout, QWidget, QStatusBar


import cv2
import os


class MyThread(QThread):
    mySignal = pyqtSignal(QPixmap)
    def __init__(self):
        super().__init__()
        self.cam = cv2.VideoCapture(0)
        self.cam.set(3, 480)
        self.cam.set(4, 320)

    def run(self):
        while True:
            ret, self.img = self.cam.read()
            self.printImage(self.img)
            QTest.qWait(10)

    def printImage(self, imgBGR):
        imgRGB = cv2.cvtColor(imgBGR, cv2.COLOR_BGR2RGB)
        h, w, byte = imgRGB.shape
        img = QImage(imgRGB, w, h, byte * w, QImage.Format_RGB888)
        img = QPixmap(img)
        cv2.imwrite('./cam.jpg', imgRGB)
        self.mySignal.emit(img)


class camera(QMainWindow):
    def __init__(self):
        super().__init__()
        loadUi("camera.ui", self)
        self.main()


    def main(self):
        self.th = MyThread()
        self.th.mySignal.connect(self.setImage)

    def getPicture(self):
        self.th.start()


    def setImage(self, img):
        self.pic.setPixmap(img)

if __name__ == "__main__":
    app = QApplication([])
    app.setStyleSheet("background-color:black;")  
    window = camera()
    window.show()
    app.exec()
   # sys.exit(app.exec_())
