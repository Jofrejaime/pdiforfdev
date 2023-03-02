import React from "react";
import styles from "./Notifications.module.css";
import useMedia from "../../Hooks/useMedia";
import Avatar from "../../assets/img/avatar.jpg";

function Notifications() {
  const mobile = useMedia("(max-width: 45rem)");
  return (
    <section className={mobile ? "container" : styles.notifications}>
      <h4 className={styles.tittleNotification}>Suas Notificações</h4>
      <ul className={styles.notificationList}>
        <li>
          <div className={styles.avatar}>
            <picture>
              <img src={Avatar} alt="Jofre Jaime" />
            </picture>
          </div>
          <div className={styles.information}>
            <p className={styles.information_text}><span className={styles.author}>Jofre Jaime</span> <span className={styles.action}>Gostou do teu Projecto</span> </p>
            <span className={styles.information_data}>1 de Março</span>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Notifications;
