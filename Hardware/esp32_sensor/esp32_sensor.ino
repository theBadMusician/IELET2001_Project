#include <analogWrite.h> 
#include <Arduino.h>
#include <WiFi.h>
#include <SocketIoClient.h>


SocketIoClient socket; // Creating an instance of the socketIoClient class called socket


// set the WiFi SSID and password here:
const char wifiNetwork[] = "esp32wifi";
const char wifiPassword[] = "gruppe24";


// set the IP address and port here:
const char serverIP[] = "10.22.226.161";
const int serverPort = 80; 


const int sensorPin = 0; // Sets the pin that the sensor is connected to
int sensorDelay = 3000; // Default delay (in ms) between each sensor reading. Can be changed from the server using the event "changeSensorDelay"
unsigned long sensorTimer; // variable for keeping track of the time between each sensor reading


void event(const char * payload, size_t length) {
    // Default event, prints out the message from the server
    String dataString(payload);
    Serial.println(dataString);
}


void sendSensorData(){
    // Sends the sensor reading from the ESP32 to the server. 
    char sensorData[10]; // char array for storing the sensor reading
    itoa(analogRead(sensorPin), sensorData, 10); // converts the sensor reading to a char array and puts it in sensorData
    socket.emit("Data-from-mcu",sensorData);
}


void changeSensorDelay(const char * newDelay, size_t length){ 
    // Sets a new delay between each sensor reading. Takes a delay from the server in seconds and converts it to milliseconds.
    String newDelayString(newDelay); // converts the char array from the server into a string
    int newDelayInt = newDelayString.toInt(); // converts the string to an int
    sensorDelay = newDelayInt*1000;
}


void connectToWifi(){
    // Connects the ESP32 to WiFi. Uses the global variables for network SSID and password, wifiNetwork and wifiPassword
    WiFi.mode(WIFI_STA);
    WiFi.begin(wifiNetwork, wifiPassword);

    Serial.println();
    Serial.println();
    Serial.print("Waiting for WiFi... ");

    while(WiFi.status() != WL_CONNECTED) {
        // keeps the program waiting until a WiFi connection is established
        Serial.print(".");
        delay(500);
    }

    Serial.println("");
    Serial.println("WiFi connected");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());

    delay(500);
}


void setup() {
  // put your setup code here, to run once:
    Serial.begin(115200);
    pinMode(sensorPin, INPUT); // sets the mode of the sensorPin
    
    connectToWifi(); // Establishes a WiFI connection
    
    socket.begin(serverIP, serverPort); // Opens a connection to the server


    // SocketIO events:
    socket.on("message", event); // Default event, when the ESP receives a message from the server
    socket.on("changeSensorDelay", changeSensorDelay); // 


    sendSensorData(); // The sensordata is read and sent to the server before the loop starts
    sensorTimer = millis(); // Resets the timer before the loop starts
}


void loop() {
    socket.loop(); // keeps the socket.IO connection open
    
    if(millis() - sensorTimer > sensorDelay) {
      // The sensordata is read and sent to the server with a time interval decided by the sensorDelay variable
      sendSensorData();
      sensorTimer = millis(); // resets the timer
    }
    
    
}
