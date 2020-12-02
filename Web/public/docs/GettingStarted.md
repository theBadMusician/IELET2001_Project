### MCUniversity

<img src="../images/mcu-logos/microcontroller-black.png"  width="100%"><br>

MCUniversity is a student project for IELET2001 (Computer Communications) at NTNU, Trondheim (H20). The Project involves creating a control and monitoring platform using ESP32 MCUs, Server system in Node.js, remote database in Firebase, and front-end panels for the web and (WIP) mobile platforms.

##### Systems Architecture

<img src="..\images\Project_systems_architecture.png"  width="100%"><br>

The Node.js server is hosted on a Raspberry Pi 3B which tranceives its data using Python based API, and then stores it in a remote Firebase database. The Server must be able to bi-directionally communicate with a ESP32 MCU node (written in C++ with Arduino lib) to control and monitor its peripheries (sensors, control mechanisms). The system is controlled and monitored using web (HTML/CSS/JS & maybe React) and mobile (Swift iOS and Java Android) front-end platforms.

##### Server

Node.js Back-end using Express MVC framework
