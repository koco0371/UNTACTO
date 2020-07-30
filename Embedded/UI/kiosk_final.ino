//RealTimeClock Sensor(DS1302) Header
#include <DS1302.h>
//temperature and humidity Sensor(DHT11) Header
#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>
//I2C Header
#include <Wire.h>

//Set Sensor
//DS1302
int RST = 4;
int CLK = 5;
int DAT = 6;
DS1302 rtc(RST, DAT, CLK);

//DHT11
#define DHTTYPE    DHT11     // Using DHT 11
#define DHTPIN 2  // DHT data pin
DHT_Unified dht(DHTPIN, DHTTYPE);
uint32_t delayMS;

//I2C
int addr = 0x8;

//else
#define DATA_LEN 30
char str1[] = "12:11:10";
String str2 = "36.5";
char str_time[9];
char str_data[DATA_LEN];

float temp, humi;


void setup() {
  dht.begin();
  sensor_t sensor;
  dht.temperature().getSensor(&sensor);
  delayMS = sensor.min_delay / 1000;

  
  Wire.begin(addr);                // join i2c bus with address #8
  
  
  Wire.onRequest(sendData); // register event
  Wire.onReceive(receiveData);


  Serial.begin(9600);
  //pinMode(ledPin, OUTPUT);
  //digitalWrite(ledPin, LOW); // turn it off
}



void loop() {
  sensors_event_t event;
  dht.temperature().getEvent(&event);
  if (isnan(event.temperature)) {
    Serial.println(F("Error reading temperature!"));
  }
  else {
    //Serial.print(F("Temperature: "));
    temp = event.temperature;
    //Serial.print(temp);
    //Serial.println(F("°C"));
  }
  dht.humidity().getEvent(&event);
  if (isnan(event.relative_humidity)) {
    Serial.println(F("Error reading humidity!"));
  }
  else {
    //Serial.print(F("Humidity: "));
    humi = event.relative_humidity;
    //Serial.print(humi);
    //Serial.println(F("%"));
  }

  
  delay(100);
}



void printTime(){
  Time t = rtc.time();
  char buf[50];
  snprintf(str_time, sizeof(str_time), "%02d:%02d:%02d", t.hr, t.min, t.sec);
  //snprintf(buf, sizeof(buf), "%04d-%02d-%02d %02d:%02d:%02d", t.yr, t.mon, t.date, t.hr, t.min, t.sec);
  
  //Serial.println(buf);
  //Serial.println(str_time);
}

void getSendingData(){
  char tmp1[10], tmp2[10];
  dtostrf(temp, 4, 2, tmp1);
  dtostrf(humi, 4, 2, tmp2);
  Time t = rtc.time();
  snprintf(str_data, sizeof(str_data), "%02d:%02d:%02d %s %s", t.hr, t.min, t.sec, tmp1, tmp2);
  //Serial.println(str_data);
}


// function that executes whenever data is received from master
// this function is registered as an event, see setup()
void sendData(int howMany) {
  //while (Wire.available()) { // loop through all but the last
    //char c = Wire.read(); // receive byte as a character
    //digitalWrite(ledPin, c);

    int len1 = str2.length();
    byte str3[2] = {1,2};
    //Wire.write(reinterpret_cast<const unsigned char*>(str1), 8);
    Wire.write(reinterpret_cast<const unsigned char*>(str_data), DATA_LEN);
    getSendingData();
    Serial.print("Sending Data : ");
    Serial.println(str_data);
}
  


void receiveData(int bytes)
{
  int num = Wire.read();

  rtc.writeProtect(false);
  if(num > 0 && num <10)
  {
    rtc.halt(false); 
    rtc.writeProtect(false); 
    Time t(2013, 9, 22, 0, 0, 0, Time::kSunday);
    rtc.time(t);
  }

  
  Serial.print("Receive Data : ");
  Serial.println(num);

}
