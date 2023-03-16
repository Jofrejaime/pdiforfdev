
import { set } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./Components/services/api";
import useFetch from "./Hooks/useFetch";
export const UserContext = React.createContext();
export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const {file, setFile} = React.useState([])
  const [loginType, setLogintype] = React.useState('login');
  const navigate = useNavigate();
const {request} = useFetch()

// eslint-disable-next-line react-hooks/exhaustive-deps
async function getUser(token) {
  const { url, options } = USER_GET(token);
  const response= await fetch(url, options);
  const json = await response.json()
  setData(json);
  setLogin(true);
}  
const userLogout = React.useCallback(
    async function(){
      setData(null);
      setLoading(false);
      setLogin(false);
      setError(null);
      window.localStorage.removeItem("token");
      navigate('/login')
    },[navigate]);

  
  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({userName: username, password: password});
      const response = await fetch(url, options);
      const json = await response.json()
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      window.localStorage.setItem("token", json.token);
      await getUser(json.token);
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
          const { url, options } =  TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          const json = await response.json()
          if (!response.ok) throw new Error("Token Invalido");
          else await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }else{
        setLogin(false)
      }
    }
    autoLogin()
  }, [getUser, userLogout]);
    
function setFiles( files){setFile(files)}
  return (
    <UserContext.Provider
      value={{ userLogin, data, error, loading, login, userLogout, loginType, setLogintype, file, setFiles, setFile }}
    >
      {children}
    </UserContext.Provider>
  );
};
