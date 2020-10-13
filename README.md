# IELET2001 H20 Control and Monitoring System Project 
Work Project in IELET2001 (Computer Communications) at NTNU, Trondheim. The Project involves creating a control and monitoring platform using ESP32 MCUs, Server system in Node.js, remote database in Firebase, and front-end panels for the web and mobile platforms. 


![Project Systems Architecture](https://github.com/theBadMusician/IELET2001_Project/blob/master/project_assets/Project_systems_architecture.png)

The Node.js server is hosted on a Raspberry Pi 3B which tranceives its data using Python based API, and then stores it in a remote Firebase database. The Server must be able to bi-directionally communicate with a ESP32 MCU node (written in C++ with Arduino lib) to control and monitor its peripheries (sensors, control mechanisms). The system is controlled and monitored using web (HTML/CSS/JS & maybe React) and mobile (Swift iOS and Java Android) front-end platforms. 
