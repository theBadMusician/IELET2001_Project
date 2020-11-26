const socketio = require('socket.io');

let options = { transports: ['websocket'] }

var io = (server) => {
    let serverSocket = socketio(server, options);

    serverSocket.on('connect', socket => {
        console.log("New client connected. Socket ID:" + socket.id);
        socket.on("disconnect", () => {
            console.log("Client disconnected. Socket ID: " + socket.id);
        });

        socket.on("touchSensor", (data) => {
            console.log(data);
        })
    })

    setInterval(() => {
        getApiAndEmit(serverSocket);
    }, 1000);
};

const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
    // console.log(response);
};

module.exports = io;
