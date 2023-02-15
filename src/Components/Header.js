import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
import SearchBar from "./SearchBar/SearchBar";
// Jofre
function Header() {
  const [display, setDisplay] = React.useState('');
 
   const params = useLocation();
  React.useEffect(() => { 
    if (params.pathname === "/login" || params.pathname === '/login/createAccount') setDisplay('none')
    else setDisplay(' ')
  }, [params]);
  return (
    <header className={styles.header} style={{display: display}}>
      <nav className={`${styles.nav} container`}>
        <div className={styles.one}>
          <Link to={"/"} className={styles.logo}>
            <Logo />
          </Link>
          <div className={styles.link}>
            <Link to="/" className={styles.link_a} >home
            </Link>
          
          </div>
          <div className={styles.link}>
            <Link to="descover" className={styles.link_a} >descover
            </Link>
          </div>
        </div>
        <div className={styles.search_bar}>
          <SearchBar />
        </div>
        <div className={styles.three}>
          <div className={styles.link}>
            <Link to={"notification"} className={styles.link_a} >
              <FontAwesomeIcon icon={faBell} />
              <p>notification</p>
            </Link>
          </div>
          <div className={styles.link}>
            <Link to={"message"} className={styles.link_a}>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>message</p>
            </Link>
          </div>

          <Link to={"profile"} className={styles.profile}>
            P
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
