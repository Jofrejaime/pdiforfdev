import react from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";

import Message from "./Components/Message/Message";
import Notifications from "./Components/Notifications/Notifications";
import Discover from "./Components/Discover/Discover";
import { UserStorage } from "./UserContext";
import React from "react";
import User from "./Components/User/User";
import MessageIndex from "./Components/Message/MessageIndex";
function App() {
 
 
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={"pdiforfdev"} element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="user/*" element={<User />} />
            <Route path="message/*" element={<MessageIndex />} />
            <Route path="notification/*" element={<Notifications />} />
            <Route path="discover" element={<Discover />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
