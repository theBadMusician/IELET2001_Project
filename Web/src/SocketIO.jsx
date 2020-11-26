import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client"
const ENDPOINT = process.env.NODE_ENV === 'production' ? 'http://78.156.12.136:80' : 'http://78.156.12.136:3000';

function SocketIO() {
    const [response, setResponse] = useState("");
  
    useEffect(() => {
      const socket = socketIOClient(ENDPOINT, {
        transports: ['websocket']
      });

      socket.on("FromAPI", data => {
        setResponse(data);
      });
    }, []);
  
    return (
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
    );
  }
  
export default SocketIO;