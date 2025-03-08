import { io } from "socket.io-client";
import "./App.css";
import { useState } from "react";

const socket = io("http://localhost:3000");

function App() {
  const [socketId, setSocketId] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string>("");

  socket.on("connect", () => {
    setSocketId(socket.id);
    socket.emit("chat message", "hello from client");
  });

  socket.on("chat message", (msg: string) => {
    console.log(`Message from server: ${msg}`);

    setMessage(msg);
  });

  socket.on("disconnect", () => {
    setSocketId(undefined);
  });

  return (
    <>
      <p>{socketId ?? "no-socketId"}</p>
      <p>{message ?? "no-message"}</p>
    </>
  );
}

export default App;
