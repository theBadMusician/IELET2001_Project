const WebSocket = require('ws');

var websocket = () => {
    const wss = new WebSocket.Server({
        port: 8080,
        perMessageDeflate: {
            zlibDeflateOptions: {
                // See zlib defaults.
                chunkSize: 1024,
                memLevel: 7,
                level: 3
            },
            zlibInflateOptions: {
                chunkSize: 10 * 1024
            },
            // Other options settable:
            clientNoContextTakeover: true, // Defaults to negotiated value.
            serverNoContextTakeover: true, // Defaults to negotiated value.
            serverMaxWindowBits: 10, // Defaults to negotiated value.
            // Below options specified as default values.
            concurrencywLimit: 10, // Limits zlib concurrency for perf.
            threshold: 1024 // Size (in bytes) below which messages
            // should not be compressed.
        }
    });

    wss.on('connection', (socket) => {
        console.log('Websocket connection!');
        for (var t = 0; t < 3; t++)
            setTimeout(() => socket.send('message from server', () => { }), 1000 * t);
        socket.on('message', (msg) => {
            console.log(msg.data);
        })
    });
}

module.exports = websocket;