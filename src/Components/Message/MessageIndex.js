import React from "react";
import { Routes, Route } from "react-router-dom";
import Inbox from "./Inbox";
import PageNotFound from "../PageNotFound";

function MessageIndex() {
  return (
    <div className="container">
      <Routes>
        <Route path="/:username" element={<Inbox />} />
        <Route path="/" element={<Inbox />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </div>
  );
}

export default MessageIndex;
