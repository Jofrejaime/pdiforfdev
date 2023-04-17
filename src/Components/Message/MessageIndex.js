import React from "react";
import { Routes, Route } from "react-router-dom";
import Message from "./Message";
import UserMessage from "./UserMessage";
import Inbox from "./Inbox";

function MessageIndex() {
  return (
    <div className="container">
      <Routes>
        <Route path="/:username" element={<Inbox />} />
        <Route path="/" element={<Inbox />} />
      </Routes>
    </div>
  );
}

export default MessageIndex;
