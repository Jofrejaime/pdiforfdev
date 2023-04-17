import React from "react";
import { CREATE_NOTIFICATION, STAR_ON_PROJECT } from "../../services/api";
import createNotifications from "../../Notifications/createNotifications";

export default async function starProject({
  setStar,
  request,
  logedUser,
  findedProject,
  starred
}) {
 
  const userId = logedUser.id;
  const id = findedProject.id;
  const { url, options } = STAR_ON_PROJECT({ userId, id });
  const { response, json } = await request(url, options);
  if (response.ok && setStar) {
    setStar(json);
    if(logedUser.id !== findedProject.id && starred !== 'Starred' && starred.iconName !== 'star')
    createNotifications({
      issuerId: logedUser.id,
      receiverId: findedProject.userId,
      content:"estrelou seu projeto " + findedProject.title,
      request: request
    });
    
  }

}
