import React, { useState, useEffect } from "react";

import socketIOClient from "socket.io-client"
const ENDPOINT = "http://78.156.12.136:80"

function SocketIO() {
    const [response, setResponse] = useState("");
  
    useEffect(() => {
      const socket = socketIOClient(ENDPOINT, {
        transports: ['websocket']
      });

      socket.on("FromAPI", data => {
        setResponse(data);
        console.log(data);
      });
    }, []);
  
    return (
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
    );
  }
  
export default SocketIO;