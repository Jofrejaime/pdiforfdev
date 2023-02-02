import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

function Header() {
  return (
    <div className={styles.header}>
      <nav className="container">
        <Link to={"/"}>
        PDI
        </Link>
        <Link to="/">home</Link>
        <Link to="/">descover</Link>
        <div>Search Bar</div>
        <Link to={"/"}>
          <FontAwesomeIcon icon={faBell} />
          notification
        </Link>
        <Link to={"/"}>
          <FontAwesomeIcon icon={faEnvelope} />
          message
        </Link>
        <Link to={'/'}>Profile</Link>
      </nav>
    </div>
  );
}

export default Header;
