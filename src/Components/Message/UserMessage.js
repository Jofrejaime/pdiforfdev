import React from "react";
import styles from "./UserMessage.module.css";
import avatar from "../../assets/img/avatar.jpg";
import Input from "../Form/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTentArrowLeftRight,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";
function UserMessage() {
  return (
    <>
      <header className={styles.headerMessageUser}>
        {" "}
        <img className={styles.avatar} src={avatar} alt="user" />{" "}
        <p className={styles.userName}>Jofre Jaime</p>
      </header>
      <div className={styles.messageBox}>
        <div className={styles.send}>
          <p></p>
          <p>Fala aí mano!</p>
        </div>

        <div className={styles.sender}>
          <p className={styles.p}>Quero que participes de um projeto meu</p>
          <p></p>
        </div>

        <div className={styles.content}>

          <form>
            <input
              className={styles.input}
              type={"text"}
              name="message"
              id="message"
            />
            <button className={styles.button}>
              <FontAwesomeIcon icon={faUpLong} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserMessage;
