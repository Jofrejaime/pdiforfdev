import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
import SearchBar from "./SearchBar/SearchBar";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <div className={styles.one}>
          <Link to={"/"} className={styles.logo}>
            <Logo />
          </Link>
          <Link to="/">home</Link>
          <Link to="descover">descover</Link>
        </div>
        <div className={styles.search_bar}>
          <SearchBar />
        </div>
        <div className={styles.three}>
          <Link to={"notification"}>
            <FontAwesomeIcon icon={faBell} />
            <p>notification</p>
          </Link>
          <Link to={"message"}>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>message</p>
          </Link>
          <Link to={"profile"} className={styles.profile}>
            P
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
