import React, { useContext, useEffect, useRef } from 'react'
import styles from './MessageStyle.module.css'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import { SEND_MESSAGE } from '../services/api'
function FormMessage({specificConversation }) {  
  const {data: logedUser, socket}= useContext(UserContext)
  const message =  useForm('')
  const {request} = useFetch() 
  async function handleSubmit(event) {
    event.preventDefault();
    const messageS = {
      userId: logedUser.id,
      conversation: specificConversation.id,
      content: message.value,
    };
    const { url, options } = SEND_MESSAGE(messageS);
    const { json, response } = await request(url, options);

    socket.emit("message", {
      conversationId: specificConversation.id,
      userId: logedUser.id,
      username: logedUser.userName,
      content: message.value,
      created_at: new Date()
    });
    message.value = "";
  }

  return (
    <form onSubmit={handleSubmit} className={styles.footer_chat}>
    <i
      className={styles.icon +" fa fa-smile-o "+ styles.clickable}
      style={{ fontSize: "25pt" }}
      aria-hidden="true"
    ></i>
    <input
      type="text"
      className={styles.write_message}
      placeholder="Type your message here"
      {...message}
    ></input>
    <i
      className={styles.icon+' '+ styles.send+ ' fa fa-paper-plane-o' +styles.clickable}
      aria-hidden="true"
      onClick={handleSubmit}
    ></i>
  </form>
  )
}

export default FormMessage