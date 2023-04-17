import React, { useContext } from "react";
import { CREATE_NOTIFICATION, socketIO } from "../services/api";
import { UserContext } from "../../UserContext";


async function createNotifications({
  issuerId,
  receiverId,
  content,
  request,
  logedUser,
  setNotification
}) {

  
  const { url, options } = CREATE_NOTIFICATION({
    issuerId,
    receiverId,
    content,
  });
  const { json, response } = await request(url, options);
  socketIO.emit('notification', json)
}

export default createNotifications;
