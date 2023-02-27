import React from "react";
import { useNavigate } from "react-router-dom";
export const UserContext = React.createContext();
export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const {file, setFile} = React.useState([])
  const [loginType, setLogintype] = React.useState('login');
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function(){
      setData(null);
      setLoading(false);
      setLogin(null);
      setError(null);
      window.localStorage.removeItem("token");
      navigate('/login')
    },[navigate]);

  async function getUser(token) {
    const { url, options } = ""; // USER_POST(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }
  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = ""; //TOKEN_POST({username, password});
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate('/')
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false)
    }
  }
 
  
  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = ""; //TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token Invalido");
          else await getUser(token);
          const json = await response.json();
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
  }, [userLogout]);
    //jofre
function setFiles( files){setFile(files)}
  return (
    <UserContext.Provider
      value={{ userLogin, data, error, loading, login, userLogout, loginType, setLogintype, file, setFiles, setFile }}
    >
      {children}
    </UserContext.Provider>
  );
};
