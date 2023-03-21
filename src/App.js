import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Notifications from "./Components/Notifications/Notifications";
import Discover from "./Components/Discover/Discover";
import { UserStorage } from "./UserContext";
import React from "react";
import User from "./Components/User/User";
import MessageIndex from "./Components/Message/MessageIndex";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="login/*" element={<Login />} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path={"pdiforfdev"} element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="user/*" element={<ProtectedRoute><User /> </ProtectedRoute>} />
            <Route path="message/*" element={<ProtectedRoute><MessageIndex /></ProtectedRoute>} />
            <Route path="notification/*" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
            <Route path="discover" element={<Discover />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
