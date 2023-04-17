import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./Notifications.module.css";
import formatDate from "../Helper/formatDate";
import { UserContext } from "../../UserContext";
import { FIND_NOTIFICATIONS, filesUrl } from "../services/api";
import useFetch from "../../Hooks/useFetch";
function Notification({notification}) {
  return (
    <li>
      <div className={styles.avatar}>
      <picture>
        {notification.issuer && <img src={filesUrl+notification.issuer.profile.photo_url} alt={notification.issuer.userName} />}
      </picture>
    </div>
    <div className={styles.information}>
      <p className={styles.information_text}>
        <span className={styles.author}>{notification.issuer && notification.issuer.userName}</span>{" "}
        <span className={styles.action}>{notification.content}</span>{" "}
      </p>
      <span className={styles.information_data}>{formatDate(notification.created_at)}</span>
    </div>
    </li>
  );
}

export default Notification;
