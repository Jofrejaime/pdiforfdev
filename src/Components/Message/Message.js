import React from "react";
import styles from "./Message.module.css";
import { NavLink, Routes } from "react-router-dom";
import avatar from "../../assets/img/avatar.jpg";
function Message() {
  return (
    <section >
      <h1 className="title">Mensagens</h1>
      <div className={styles.listMassage}>
        <NavLink to={"user"}>
          <img className={styles.avatar} src={avatar} alt="user" />
          <div className={styles.content}>
            {" "}
            <p className={styles.userName}>Jofre Jaime</p>{" "}
            <span>{document.timeline.currentTime}</span>
            <p className={styles.messageContent}>
              Quero que participes de um projeto meu
            </p>
          </div>
        </NavLink>
        <NavLink to={"user"}>
          <img className={styles.avatar} src={avatar} alt="user" />
          <div className={styles.content}>
            {" "}
            <p className={styles.userName}>Jofre Jaime</p>{" "}
            <span>{document.timeline.currentTime}</span>
            <p className={styles.messageContent}>
              Quero que participes de um projeto meu
            </p>
          </div>
        </NavLink>{" "}
        <NavLink to={"user"}>
          <img className={styles.avatar} src={avatar} alt="user" />
          <div className={styles.content}>
            {" "}
            <p className={styles.userName}>Jofre Jaime</p>{" "}
            <span>{document.timeline.currentTime}</span>
            <p className={styles.messageContent}>
              Quero que participes de um projeto meu
            </p>
          </div>
        </NavLink>{" "}
        <NavLink to={"user"}>
          <img className={styles.avatar} src={avatar} alt="user" />
          <div className={styles.content}>
            {" "}
            <p className={styles.userName}>Jofre Jaime</p>{" "}
            <span>{document.timeline.currentTime}</span>
            <p className={styles.messageContent}>
              Quero que participes de um projeto meu
            </p>
          </div>
        </NavLink>{" "}
        <NavLink to={"user"}>
          <img className={styles.avatar} src={avatar} alt="user" />
          <div className={styles.content}>
            {" "}
            <p className={styles.userName}>Jofre Jaime</p>{" "}
            <span>{document.timeline.currentTime}</span>
            <p className={styles.messageContent}>
              Quero que participes de um projeto meu
            </p>
          </div>
        </NavLink>{" "}
        <NavLink to={"user"}>
          <img className={styles.avatar} src={avatar} alt="user" />
          <div className={styles.content}>
            {" "}
            <p className={styles.userName}>Jofre Jaime</p>{" "}
            <span>{document.timeline.currentTime}</span>
            <p className={styles.messageContent}>
              Quero que participes de um projeto meu
            </p>
          </div>
        </NavLink>{" "}
        <NavLink to={"user"}>
          <img className={styles.avatar} src={avatar} alt="user" />
          <div className={styles.content}>
            {" "}
            <p className={styles.userName}>Jofre Jaime</p>{" "}
            <span>{document.timeline.currentTime}</span>
            <p className={styles.messageContent}>
              Quero que participes de um projeto meu
            </p>
          </div>
        </NavLink>
      </div>
    </section>
  );
}

export default Message;
