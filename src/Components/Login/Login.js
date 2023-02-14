import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginCreate from "./LoginCreate";
import LoginPassLost from "./LoginPassLost";
import LoginPassReset from "./LoginPassReset";
import LoginForm from "./LoginForm";
import { UserContext } from "../../UserContext";
import styles from "./Login.module.css";
function Login() {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/pdiforfdev" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="createAccount" element={<LoginCreate />} />
          <Route path="lostPass" element={<LoginPassLost />} />
          <Route path="reset" element={<LoginPassReset />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login;
