import React from 'react'
import styles from './MessageStyle.module.css'
function FormMessage() {
  return (
    <div className={styles.footer_chat}>
    <i
      className={styles.icon +" fa fa-smile-o "+ styles.clickable}
      style={{ fontSize: "25pt" }}
      aria-hidden="true"
    ></i>
    <input
      type="text"
      className={styles.write_message}
      placeholder="Type your message here"
    ></input>
    <i
      className={styles.icon+' '+ styles.send+ ' fa fa-paper-plane-o' +styles.clickable}
      aria-hidden="true"
    ></i>
  </div>
  )
}

export default FormMessage