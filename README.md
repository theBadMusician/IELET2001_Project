# IELET2001 H20 Control and Monitoring System Project 
Work Project in IELET2001 (Computer Communications) at NTNU, Trondheim. The Project involves creating a control and monitoring platform using ESP32 MCUs, Server system in Node.js, remote database in Firebase, and front-end panels for the web and mobile platforms. 


![Project Systems Architecture](https://github.com/theBadMusician/IELET2001_Project/blob/master/project_assets/Project_systems_architecture.png)

The Node.js server is hosted on a Raspberry Pi 3B which tranceives its data using Python based API, and then stores it in a remote Firebase database. The Server must be able to bi-directionally communicate with a ESP32 MCU node (written in C++ with Arduino lib) to control and monitor its peripheries (sensors, control mechanisms). The system is controlled and monitored using web (HTML/CSS/JS & maybe React) and mobile (Swift iOS and Java Android) front-end platforms. 

# System Architecture parts
## Data Handling and Processing
Data handling involves creating scripts (preferably in C++ or Python) to preprocess, process and in general, standardize various information to most efeective data structures, so that they can be further used in data visualization (plotting, graphing, analysis, etc.), database storage (SQL, NoSQL, CQL, GraphQL, etc.), Websocket communications (node comms i.e. server <-> client, server <-> hardware, etc.) and more.

The APIs have to methodize data so that it requires minimal to none processing in other system modules and do it in effective fashion as to limit processing time as much as possible, as well as be fairly readable, customizable and debuggable.

Involves mostly programming data structures, processing functions/methods etc.

## Database
The database(s) is where all collected information will be stored, that includes sensor data, MCU MAC-addresses, login information, and anything else you can think of. This data can then be used to plot graphs, check for device/user identification, and everything else.

This task involves deciding on the best paradigms (systems) to store appropriate data (SQL, NoSQL, CQL, GraphQL), learn to use cloud database service (Firebase, MongoDB, MySQL), decide when it's best to store remotely or locally, when to send/backup data to a remote database, design database schemas (structures), as well as integrating it to work smoothly with the back-end (server) and the front-end (client).

## Hardware
Hardware part is about working with the physical layer of the project - programming, wiring, and interconnecting MCUs (ESP32, Arduinos, others) and eventually, the Zumo car drone(s). The MCUs have to work with various sensors and actuators, and be able to transmit the recorded data to the server (using Websockets), as well as be controllable from Web- and Mobile Clients.

Involves both low-level (for getting UIDs and MAC-addresses) and high-level C++ programming, as well as tinkering with hardware - finding best peripheral (sensor/actuator) configurations, wiring MCUs together with peripherals, understanding and programming various sensors and actuators, MCU/Zumo pinout analysis, maybe small amount of soldering.

## Web UI
Web User Interface is the part of the project which is directly accessible by the end user and is the main tool to control and monitor all parts of the system. The Web UI has to have intuitiv design and be easy to use.

Involves UI design, website architecture, css and html coding, and javascript programming - has to have good interface with the server.
