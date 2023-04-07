import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./UserHeader.module.css";
import UserHeaderNav from "./UserHeaderNav";
import { UserContext } from "../../UserContext";
function UserHeader() {
  const [title, setTitle] = React.useState("");
  const [logedUser, setLogedUser] = React.useState(true)
  const location = useLocation();
  const {data} = React.useContext(UserContext)
  React.useEffect(() => {
    if(!location.pathname.startsWith('/'+data.userName)){
      setLogedUser(false)
    }else if(location.pathname === `/${data.userName}`) setTitle('');
    else if (location.pathname === `/${data.userName}/stats`) setTitle("Estatísticas");
    else if (location.pathname === `/${data.userName}/definition`) setTitle("Difinições");
    else if (location.pathname === `/${data.userName}/createaproject`)
      setTitle("Novo Projecto");
  }, [data, location]);
  return (
    <div>{logedUser? <header className={styles.header}>
      <h1 className="title"> {title}</h1>
      <UserHeaderNav />
    </header>:''}</div>
    
  );
}

export default UserHeader;
