import { io } from "socket.io-client";
import "./App.css";
import { useState } from "react";

const socket = io("http://localhost:3000");

function App() {
  const [socketId, setSocketId] = useState<string | undefined>(undefined);

  socket.on("connect", () => {
    setSocketId(socket.id);
  });

  socket.on("disconnect", () => {
    alert("Disconnected from server");
    setSocketId(undefined);
  });

  return <>{socketId ?? "no-socketId"}</>;
}

export default App;
