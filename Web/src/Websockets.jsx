import React, { useState, useEffect } from "react";
const ENDPOINT = "wss://78.156.12.136:3000/"

function Ws() {
    const [response, setResponse] = useState("");
  
    useEffect(() => {
        var socket = new WebSocket(ENDPOINT);
        console.log(socket);

        socket.addEventListener('error', (msg) => {
            console.log("Websocket Error!");
        });

        socket.addEventListener('open', (msg) => {
            console.log("Websocket Connection Open!");
        });

        socket.addEventListener('message', (msg) => {
            console.log(msg.data);
            setResponse(msg.data);
        });

    }, []);
  
    return (
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
    );
  }
  
export default Ws;