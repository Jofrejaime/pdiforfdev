import React from "react";
import styles from "./AddButton.module.css";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Add() {
  return (
    <Link to={"createAProject"} className={styles.button}>
      <FontAwesomeIcon icon={faAdd} />
    </Link>
  );
}

export default Add;
