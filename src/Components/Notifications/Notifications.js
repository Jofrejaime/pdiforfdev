import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./Notifications.module.css";
import useMedia from "../../Hooks/useMedia";
import Avatar from "../../assets/img/avatar.jpg";
import formatDate from "../Helper/formatDate";
import Notification from "./Notification";
import { FIND_NOTIFICATIONS } from "../services/api";
import useFetch from "../../Hooks/useFetch";
import { UserContext } from "../../UserContext";

function Notifications() {
  const mobile = useMedia("(max-width: 45rem)");
  const { data: logedUser } = useContext(UserContext);
  const { request } = useFetch();
  const [notifications, setNotifications] = useState([]);
  const findNotifications = useCallback(async () => {
    if(logedUser){
    const { url, options } = FIND_NOTIFICATIONS({ receiverId: logedUser.id });
    const { json, response } = await request(url, options);
    if(response.ok) setNotifications(json)}
  }, [logedUser, request]);
  useEffect(() => {
    findNotifications();
  }, [findNotifications]);
  console.log(notifications)

  return (
    <section className={mobile ? "container" : styles.notifications}>
      <h4 className={styles.tittleNotification}>Suas Notificações</h4>
      <ul className={styles.notificationList}>
       { notifications.length >0? notifications.map(notification=><Notification notification={notification}/> ): <p>Nenhuma Notificação</p>}
      </ul>
    </section>
  );
}

export default Notifications;
