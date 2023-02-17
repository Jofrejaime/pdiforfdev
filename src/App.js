import react from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Message from "./Components/Message/Message";
import Notifications from "./Components/Notifications/Notifications";
import Descover from "./Components/Descover/Descover";
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
            <Route path="descover" element={<Descover />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
