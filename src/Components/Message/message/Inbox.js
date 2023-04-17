import React from "react";
import styles from "../MessageStyle.module.css"
import FormMessage from "../FormMessage";
import ConversationItem from "../ConversationItem";
import SearchMessage from "../SearchMessage";
function Inbox() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <section className={styles.discussions}>
         <SearchMessage/>
         <ConversationItem/>
        </section>
        <section className={styles.chat+' '+styles.beetwen}>
          
         
         <FormMessage />
        </section>
      </div>
    </div>
  );
}

export default Inbox;
