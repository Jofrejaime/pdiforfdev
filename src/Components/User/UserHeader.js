import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./UserHeader.module.css";
import UserHeaderNav from "./UserHeaderNav";

function UserHeader() {
  const [title, setTitle] = React.useState("");
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/user") setTitle("Usário");
    else if (location.pathname === "/user/stats") setTitle("Estatísticas");
    else if (location.pathname === "/user/definition") setTitle("Difinições");
    else if (location.pathname === "/user/createaproject")
      setTitle("Novo Projecto");
  }, [location]);
  return (
    <header className={styles.header}>
      <h1 className="title"> {title}</h1>
      <UserHeaderNav />
    </header>
  );
}

export default UserHeader;
