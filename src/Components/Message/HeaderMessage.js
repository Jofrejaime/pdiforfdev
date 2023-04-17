import React from 'react'
import styles from './MessageStyle.module.css'
function HeaderMessage() {
  return (
    <div className={styles.header_chat}>
            <i className={styles.icon + " fa fa-user-o"} aria-hidden="true"></i>
            <p className={styles.name}>Megan Leib</p>
            <i
              className={styles.icon + ' ' + styles.clickable+ " fa fa-ellipsis-h right"}
              aria-hidden="true"
            ></i>
          </div>
  )
}

export default HeaderMessage