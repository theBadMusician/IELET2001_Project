const express = require('express');
const socketio = require('socket.io');

let interval;

var io = (server) => {

    socketio(server).on('connect', socket => { 
        console.log("New client connected. Socket ID:" + socket.id);
        socket.on("disconnect", () => {
          console.log("Client disconnected. Socket ID: " + socket.id);
          clearInterval(interval);
        });

        if (interval) {
            clearInterval(interval);
          }
        interval = setInterval(() => getApiAndEmit(socket), 1000);
    })
};

const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
    console.log(response);
};

module.exports = io;
