import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import {
  ConversationContent,
  ConversationContentWapper,
  ConversationList,
  InputSectionContainer,
  } from './MessageStyles'
import { useContext } from 'react'
import { UserContext } from '../../UserContext'
import formatDate from '../Helper/formatDate'
import styles from './Message.module.css'
import useForm from '../../Hooks/useForm'
import { SEND_MESSAGE } from '../services/api'
import useFetch from '../../Hooks/useFetch'
import { json } from 'react-router-dom'
function ContentConversasion({messages,specificConversation, setMessages }) {
  const {data: logedUser, socket}= useContext(UserContext)
  const scroll = useRef()
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
  useEffect(()=>{
    socket.on('message', data=>{
      if(specificConversation.id === data.conversationId){
        setMessages([...messages, data])
      }
    })
  },[messages, setMessages, socket, specificConversation.id])

  return (
    <ConversationContent >
    <ConversationContentWapper>
      <ConversationList>
        {messages.length > 0 ? (
          messages.map((message) => (
            <li key={message.id}>
              <div
                ref={scroll}
                className={
                  message.userId === logedUser.id
                    ? "message own"
                    : "message"
                }
              >
                <span>{message.content}</span>
                <span>{formatDate(message.created_at)}</span>
              </div>
            </li>
          ))
        ) : (
          <li>
            Nenhuma mensagem
            <br />
            Escreva uma
          </li>
        )}
      </ConversationList>
    </ConversationContentWapper>
    <InputSectionContainer>
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          placeholder="Escreva..."
          className={styles.textarea}
          name={"message"}
          {...message}
        />
        <button className={styles.button}>
          <FontAwesomeIcon icon={faPaperPlane} beatFade />
        </button>
      </form>
    </InputSectionContainer>
  </ConversationContent>
  )
}

export default ContentConversasion