import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./Notifications.module.css";
import useMedia from "../../Hooks/useMedia";
import Notification from "./Notification";
import { FIND_NOTIFICATIONS, socketIO } from "../services/api";
import useFetch from "../../Hooks/useFetch";
import { UserContext } from "../../UserContext";
import { toast } from "react-toastify";

function Notifications() {
  const mobile = useMedia("(max-width: 45rem)");
  const { data: logedUser } = useContext(UserContext);
  const { request } = useFetch();
  const [notifications, setNotifications] = useState([]);
  const findNotifications = useCallback(async () => {
    if (logedUser) {
      const { url, options } = FIND_NOTIFICATIONS({ receiverId: logedUser.id });
      const { json, response } = await request(url, options);
      if (response.ok) setNotifications(json);
    }
  }, [logedUser, request]);
  useEffect(() => {
    findNotifications();
  }, [findNotifications, notifications]);
  useEffect(() => {
    if(logedUser)
    socketIO.on("notification", (data) => {
      if (data.receiverId === logedUser.id){
        setNotifications((notifications) => [...notifications, data]);
        toast.info(data.content)
      }
    });
  }, [logedUser]);
  return (
    <section className={mobile ? "container" : styles.notifications}>
      <h4 className={styles.tittleNotification}>Suas Notificações</h4>
      <ul className={styles.notificationList}>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <Notification key={notification.id} notification={notification} />
          ))
        ) : (
          <p>Nenhuma Notificação</p>
        )}
      </ul>
    </section>
  );
}

export default Notifications;
