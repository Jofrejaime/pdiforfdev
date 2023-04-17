import React from 'react'
import styles from './MessageStyle.module.css'
function ConversationItem() {
  return (
    <div className={styles.discussion +' '+styles.message_active}>
    <div
      className={styles.photo}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
      }}
    >
      <div className={styles.online}></div>
    </div>
    <div className={styles.desc_contact}>
      <p className={styles.name}>Megan Leib</p>
      <p className={styles.message}>9 pm at the bar if possible 😳</p>
    </div>
    <div className={styles.timer}>12 sec</div>
  </div>
  )
}

export default ConversationItem