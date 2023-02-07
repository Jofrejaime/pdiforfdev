import react from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Message from "./Components/Message/Message";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login/>} />
          <Route path="profile/*" element ={<Profile /> }/>
          <Route path="message/*"  element={<Message />}  />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
