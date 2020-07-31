### Mention

    현재 진행중인 프로젝트 입니다.

# Embedded

## Summary

```
"실시간 선호도 조사"은 투표를 통해 유저들끼리의 커뮤니티를 형성 할 수있는 가상의
주제로써 이 프로젝트를 통해 React, Node.js, Mysql, Hw등 다양한 기술을
접하는것을 목표로한다.
KIOSK에서 투표 기능을 개발
```

## Tool

### HW

|     Name     |            Info                |
| :----------: | :----------------------------: |
| Raspberry Pi | Raspberry Pi 3 Model B Rev 1.2 |
| Arduino      |                                |
| LCD Monitor  | 7inch, Resolution : 1920 x 1080 |

### SW

|    Name    | Version                                                                                  |
| :--------: | :--------------------------------------------------------------------------------------- |
|  Raspbian  | Linux raspberrypi 4.19.66-v7+ #1253 SMP Thu Aug 15 11:49:46 BST 2019 armv7l GNU/Linux    |
|     QT     | 5.14.1                                                                                   |
| QT Creator | 4.11.1                                                                                   |
|   MYSQL    | Ver 15.1 Distrib 10.1.45-MariaDB, for debian-linux-gnueabihf (armv7l) using readline 5.2 |
|   OpenCV   | 4.1.0                                                                                    |
|   Python   | 3.7.3                                                                                 |

## Check-Version

```
$ uname -a
    Linux raspberrypi 4.19.66-v7+ #1253 SMP Thu Aug 15 11:49:46 BST 2019 armv7l GNU/Linux

$ cat /proc/device-tree/model
    Raspberry Pi 3 Model B Rev 1.2

$ mysql --version
    mysql  Ver 15.1 Distrib 10.1.45-MariaDB, for debian-linux-gnueabihf (armv7l) using readline 5.2

```

## Require Module
```
sudo apt-get install update
sudo apt-get install upgrade
sudo apt-get install cmake
sudo apt-get install qtmultimedia5-dev libqt5multimediawidgets5 libqt5multimedia5-plugins libqt5multimedia5
sudo apt-get install python3-pyqt5
sudo apt-get install qttools5-dev-tools
sudo apt-get install build-essestial cmake pkg-config
sudo apt-get install libjpeg-dev libtiff5-dev libjasper-dev libpng-dev
sudo apt-get install libavcodec-dev libavformat-dev libswscale-dev libv4l-dev
sudo apt-get install libxvidcore-dev libx264-dev
sudo apt-get install libfontconfig1-dev libcairo2-dev
sudo apt-get install libgdk-pixbuf2.0-dev libpango1.0-dev
sudo apt-get install libgtk2.0-dev libgtk-3-dev
sudo apt-get install libatlas-base-dev gfortran
sudo apt-get install libhdf5-dev libhdf5-serial-dev libhdf5-103
sudo apt-get install libqtgui4 libqtwebkit4 libqt4-test python3-pyqt5
sudo apt-get install qt5-default qtbase5-dev qtdeclarative5-dev qt5-qmake qtcreator libqt5gui5  qtscript5-dev qtmultimedia5-dev libqt5multimedia5-plugins qtquickcontrols2-5-dev libqt5network5 cmake build-essential 
sudo apt-get install python3-pyqt5.qtmultimedia
sudo apt-get install python3-pyqt5.qtsql
pip3 install imutils
pip3 uninstall opencv-python
pip3 install opencv-contrib-python==4.1.0.25
pip3 install 
```

## Submit Data
```
	age gender contact


	time(sec) no_look anger contempt disgust fear happiness neutral sadness surprise

```

## Pin Setting
* Raspberry Pi

| Connection |   Name   | Pin | Pin |   Name   | Connection |
| :--------: | :------: | :-: | :-: | :-------:| :--------: |
|            |    3v3   |   1 | 2   |    5v    |      ●     |
| Arduino A4 | GPIO2 | 3 | 4 | 5V |  |
| Arudino A5 | GPIO3 | 5 | 6 | GND |  |
|  | GPIO4 | 7 | 8 | GPIO14 |  |
| ● | GND | 9 | 10 | GPIO15 |  |
|  | GPIO17 | 11 | 12 | GPIO18 |  |
|  | GPIO27 | 13 | 14 | GND |  |
|  | GPIO22 | 15 | 16 | GPIO23 |  |
|  | 3v3 | 17 | 18 | GPIO24 |  |
|  | GPIO10 | 19 | 20 | GND |  |
|  | GPIO9 | 21 | 22 | GPIO25 |  |
|  | GPIO11 | 23 | 24 | GPIO8 |  |
|  | GND | 25 | 26 | GPIO7 |  |
|  | ID_SD | 27 | 28 | ID_SC |  |
|  | GPIO5 | 29 | 30 | GND |  |
|  | GPIO6 | 31 | 32 | GPIO12 |  |
|  | GPIO13 | 33 | 34 | GND |  |
|  | GPIO19 | 35 | 36 | GPIO16 |  |
|  | GPIO26 | 37 | 38 | GPIO20 |  |
|  | GND | 39 | 40 | GPIO21 |  |




* Arduino

| Connection  | Pin | Pin | Connection |
| :---------: | :-: | :-: | :--: |
|  | IOREF | D13 |  |
|  | RESET | D12 |  |
|  | 3.3v | D11 |  |
| ● | 5v | D10 |  |
| ● | GND | D9 |  |
|  | GND | D8 |  |
|  | Vin | D7 |  |
|  | A0 | D6 | DS1302 DAT |
|  | A1 | D5 | DS1302 CLK |
|  | A2 | D4 | DS1302 RST |
|  | A3 | D3 | DHT11 Data |
| Pi GPIO2 | A4 | D2 |  |
| Pi GPIO3 | A5 | D1 |  | 





# Usage

```

```

# License

```

```


