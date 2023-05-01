import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SOCKET_SERVER,
  TOKEN_POST,
  TOKEN_VALIDATE_POST,
  USER_GET,
} from "./Components/services/api";
import { io } from "socket.io-client";
import { toast } from "react-toastify";
export const UserContext = React.createContext();
export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [username,  setUsername] = React.useState(false)
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const { file, setFile } = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [loginType, setLogintype] = React.useState("login");
  const navigate = useNavigate();
  const socket = io(SOCKET_SERVER);

  async function getUser(token) {
  
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();

    setData(json);
    setLogin(true);
  }
  React.useEffect(() => {
    if (login && data !== null) {
      setUsername(data.userName)
      socket.emit("login", { username: username });

      }
    else if(!login){
      socket.emit("logout", { username: username });
      setUsername(false)
    }
  }, [data, login, socket, username]);
  
  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setData(null);
      setLoading(false);
      setLogin(false);
      setError(null);
      window.localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({
        userName: username,
        password: password,
      });
      const response = await fetch(url, options);
      const json = await response.json();
      if (!response.ok) {
        setMessage(json);
        toast.warn(error)
        throw new Error(`Error: ${response.statusText}`);
      }
      window.localStorage.setItem("token", json.token);
      await getUser(json.token);
        toast.success('Bem vindo de volta '+username)
      navigate("/");
    } catch (err) {
      setError(message.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token Invalido");
          else await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  function setFiles(files) {
    setFile(files);
  }
  return (
    <UserContext.Provider
      value={{
        userLogin,
        data,
        socket,
        error,
        loading,
        login,
        userLogout,
        loginType,
        setLogintype,
        file,
        setFiles,
        setFile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
