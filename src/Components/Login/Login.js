import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import LoginCreate from "./LoginCreate";
import LoginPassLost from "./LoginPassLost";
import LoginPassReset from "./LoginPassReset";
import LoginForm from "./LoginForm";
import { UserContext } from "../../UserContext";
import styles from "./Login.module.css";
import "./login.css";
import PageNotFound from "../PageNotFound";
function Login() {
  const { login } = React.useContext(UserContext);
  const [loginType, setLogintype] = React.useState("login");
  const params = useLocation();
  React.useEffect(() => { 
    if (params.pathname === "/login/createAccount") setLogintype('cadastro')
    else setLogintype('login')
  }, [params]);

  if (login === true) return <Navigate to="/pdiforfdev" />;
  return (
    <section className={loginType}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="createAccount" element={<LoginCreate />} />
          <Route path="lostPass" element={<LoginPassLost />} />
          <Route path="reset" element={<LoginPassReset />} />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
       </div>
    </section>
  );
}

export default Login;
