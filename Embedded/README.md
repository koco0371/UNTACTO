## Embedded

### Summary

```
오픈소스 하드웨어인 라즈베리파이와 아두이노를 사용해 감정 분석이 가능한 키오스크를 제작했습니다.
키오스크는 카메라, 초음파 등의 센서를 통해 손(hand)과 함께 여러 신체 부위를 사용해 의견을 표출할 수 있도록 구현했습니다.
언택트(Untact), 즉 비대면이 주목받는 현재, 이와 같은 투표 기능이 가능한 키오스크는 기업, 학교, 개인 등
다양한 분야의 조직에게 적은 자원 투자로 신뢰할 수 있는 분석 결과물을 제공해줄 것이라 기대할 수 있습니다.
```

#### Function summary

- Qt를 이용한 화면 구성
- OpenCV를 이용해서 카메라 사용 및 Microsoft Azure의 얼굴 표정 인식 API 활용해 감정 분석
- 적외선 센서를 이용해 동작을 인식하여 키오스크 터치 최소화
- 감정 분석 결과를 DB에 보내고 동영상과 같은 데이터를 DB에서 받으면서 통신

### Settings

#### HW

|     Name     |              Info               |
| :----------: | :-----------------------------: |
| Raspberry Pi | Raspberry Pi 3 Model B Rev 1.2  |
|   Arduino    |               Uno               |
| LCD Monitor  | 7inch, Resolution : 1920 x 1080 |

#### SW

|    Name    | Version                                                                                  |
| :--------: | :--------------------------------------------------------------------------------------- |
|  Raspbian  | Linux raspberrypi 4.19.66-v7+ #1253 SMP Thu Aug 15 11:49:46 BST 2019 armv7l GNU/Linux    |
|     QT     | 5.14.1                                                                                   |
| QT Creator | 4.11.1                                                                                   |
|   MYSQL    | Ver 15.1 Distrib 10.1.45-MariaDB, for debian-linux-gnueabihf (armv7l) using readline 5.2 |
|   OpenCV   | 4.1.0                                                                                    |
|   Python   | 3.7.3                                                                                    |

#### Check-Version

```
$ uname -a
    Linux raspberrypi 4.19.66-v7+ #1253 SMP Thu Aug 15 11:49:46 BST 2019 armv7l GNU/Linux

$ cat /proc/device-tree/model
    Raspberry Pi 3 Model B Rev 1.2

$ mysql --version
    mysql  Ver 15.1 Distrib 10.1.45-MariaDB, for debian-linux-gnueabihf (armv7l) using readline 5.2

```

#### Require Module

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
sudo apt-get install qt5-default qtbase5-dev qtdeclarative5-dev qt5-qmake qtcreator libqt5gui5  qtscript5-dev qtmultimedia5-dev qtquickcontrols2-5-dev libqt5network5 cmake build-essential
sudo apt-get install python3-pyqt5 qttools5-dev-tools python3-pyqt5.qtsql libqt5sql5-mysql
sudo apt-get install python3-pyqt5.qtmultimedia
sudo apt-get install python3-pyqt5.qtsql
pip3 install imutils
pip3 uninstall opencv-python
pip3 install opencv-contrib-python==4.1.0.25


sudo pip3 install firebase-admin
```

#### Submit Data

```
	age gender contact


	time(sec) no_look anger contempt disgust fear happiness neutral sadness surprise

```

### Pin Setting

Raspberry Pi

| Connection |  Name  | Pin | Pin |  Name  | Connection |
| :--------: | :----: | :-: | :-: | :----: | :--------: |
|            |  3v3   |  1  |  2  |   5v   |     ●      |
| Arduino A4 | GPIO2  |  3  |  4  |   5V   |            |
| Arudino A5 | GPIO3  |  5  |  6  |  GND   |            |
|            | GPIO4  |  7  |  8  | GPIO14 |            |
|     ●      |  GND   |  9  | 10  | GPIO15 |            |
|            | GPIO17 | 11  | 12  | GPIO18 |            |
|            | GPIO27 | 13  | 14  |  GND   |            |
|            | GPIO22 | 15  | 16  | GPIO23 |            |
|            |  3v3   | 17  | 18  | GPIO24 |            |
|            | GPIO10 | 19  | 20  |  GND   |            |
|            | GPIO9  | 21  | 22  | GPIO25 |            |
|            | GPIO11 | 23  | 24  | GPIO8  |            |
|            |  GND   | 25  | 26  | GPIO7  |            |
|            | ID_SD  | 27  | 28  | ID_SC  |            |
|            | GPIO5  | 29  | 30  |  GND   |            |
|            | GPIO6  | 31  | 32  | GPIO12 |            |
|            | GPIO13 | 33  | 34  |  GND   |            |
|            | GPIO19 | 35  | 36  | GPIO16 |            |
|            | GPIO26 | 37  | 38  | GPIO20 |            |
|            |  GND   | 39  | 40  | GPIO21 |            |

Arduino

| Connection |  Pin  | Pin | Connection |
| :--------: | :---: | :-: | :--------: |
|            | IOREF | D13 |            |
|            | RESET | D12 |            |
|            | 3.3v  | D11 |            |
|     ●      |  5v   | D10 |            |
|     ●      |  GND  | D9  |            |
|            |  GND  | D8  |            |
|            |  Vin  | D7  |            |
|            |  A0   | D6  | DS1302 DAT |
|            |  A1   | D5  | DS1302 CLK |
|            |  A2   | D4  | DS1302 RST |
|            |  A3   | D3  | DHT11 Data |
|  Pi GPIO2  |  A4   | D2  |            |
|  Pi GPIO3  |  A5   | D1  |            |

#### Auth

```
/home/pi/KIOSK/Auth/ServiceAccountKey.json
```

### description

#### Pages

##### 1. 광고 재생

    키오스크에 있는 모든 광고 영상 파일 반복 재생

##### 2. 카메라 가이드

    얼굴을 카메라에 고정시킬 수 있도록 카메라 촬영 화면을 보여줌

##### 3. 선택 광고 재생

    선택한 광고를 재생하면서 동시에 카메라를 통해 얼굴 표정 수집

##### 4. 개인정보 수집

    사용자 보상을 위해 사용자의 개인정보를 받음

### Problem & Solve

#### Real-Time Data Analysis

- 문제상황
  - 표정을 인식해 주는 Azure API 에서 로컬에 있는 파일을 확인할 수 없음
- 해결
  - 웹서버인 파이어베이스(Firebase)를 사용해 실시간으로 DB에 사진을 업로드해 얼굴 인식 가능하게 함
  - [FireBase](https://firebase.google.com/docs/reference?hl=ko)

#### Auto Play

- 문제상황
  - 카메라 리소스 문제로 카메라를 사용하는 페이지가 돌아오면 중지됨
- 해결
  - 페이지 단위로 카메라를 릴리즈해서 페이지가 넘어가도 카메라 리소스를 계속해서 사용할 수 있도록 함

## Unresolved Issues

#### No Sound

> 영상 재생시 디스플레이에서 소리가 재생되지 않는 에러를 발견
> mp4(Window용)에서 h264(PyQT용)로 전환시, 영상과 소리를 따로 추출되는데 이 둘이 연동되지 않음
> PyQT에서 사용하는 재생기인 Qmediaplayer 문제로 판단하였고,
> 해결방안으로는 QT 동영상 라이브러리인 QtAV를 사용하면 제한된 재생파일로 인한 문제를 해결할 것이라 판단
> [QtAV](https://github.com/wang-bin/QtAV)
