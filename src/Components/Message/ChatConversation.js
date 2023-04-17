import React, { useContext, useEffect, useRef } from "react";
import styles from "./MessageStyle.module.css";
import { UserContext } from "../../UserContext";
import { filesUrl } from "../services/api";
function ChatConversation({ messages, onLineUsers, otherMember }) {
  const scroll = useRef();
  const { data: logedUser } = useContext(UserContext);
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className={styles.messages_chat}>
      {messages ? (
        <div>
          {messages &&
            messages.map((message) =>
              message.userId !== logedUser.id ? (
                <>
                  <div ref={scroll} className={styles.message}>
                    <div
                      className={styles.photo}
                      style={message.issuer && {
                        backgroundImage: `url(${
                          filesUrl + message.issuer.profile.photo_url
                        })`,
                      }}
                    >
                      <div className={styles.online}></div>
                    </div>
                    <p className={styles.text}>{message.content}</p>
                  </div>
                  <p className={styles.time}> 14h58</p>
                </>
              ) : (
                <div
                  ref={scroll}
                  className={styles.message + " " + styles.text_only}
                >
                  <div className={styles.response}>
                    <p className={styles.text}> {message.content}</p>
                    <p className={styles.time}> 14h58</p>
                  </div>
                </div>
              )
            )}
        </div>
      ) : (
        <div>Selecione uma conversa</div>
      )}
    </div>
  );
}

export default ChatConversation;
