import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginCreate from "./LoginCreate";
import LoginPassLost from "./LoginPassLost";
import LoginPassReset from "./LoginPassReset";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="createAccount" element={<LoginCreate />} />
        <Route path="lostPass" element={<LoginPassLost />} />
        <Route path="reset" element={<LoginPassReset />} />
      </Routes>
    </div>
  );
}

export default Login;
