import React from 'react'
import styles from './MessageStyle.module.css'
function ChatConversation() {
  return (
    <div className={styles.messages_chat}>
    <div className={styles.message}>
      <div
        className={styles.photo}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
        }}
      >
        <div className={styles.online}></div>
      </div>
      <p className={styles.text}> Hi, how are you ? </p>
    </div>
    <div className={styles.message +' '+styles.text_only}>
      <p className={styles.text}>
        {" "}
        What are you doing tonight ? Want to go take a drink ?
      </p>
    </div>
    <p className={styles.time}> 14h58</p>
    <div className={styles.message+' '+styles.text_only}>
      <div className={styles.response}>
        <p className={styles.text}> Hey Megan ! It's been a while 😃</p>
      </div>
    </div>
    <div className={styles.message+' '+ styles.text_only}>
      <div className={styles.response}>
        <p className={styles.text}> When can we meet ?</p>
      </div>
    </div>
    <p className={styles.response_time+' '+styles.time}> 15h04</p>
    <div className={styles.message}>
      <div
        className={styles.photo}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
        }}
      >
        <div className={styles.online}></div>
      </div>
      <p className={styles.text}> 9 pm at the bar if possible 😳</p>
    </div>
    <p className={styles.time}> 15h09</p>
  </div>
  )
}

export default ChatConversation