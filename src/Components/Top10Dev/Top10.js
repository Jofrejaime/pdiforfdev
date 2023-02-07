import React from "react";
import styles from "./Top10.module.css";
function Top10() {
  return (
    <section className={styles.top_10}>
      <div className="container">
         <h1 className={styles.title}>topDev 10</h1>
      <p className={styles.texto}>Melhores Talentos do Mês</p>
      <div className={styles.devs_Top10}>
        <div className={styles.dev_Box}></div>
        <div className={styles.dev_Box}></div>
        <div className={styles.dev_Box}></div>
        <div className={styles.dev_Box}></div>
        <div className={styles.dev_Box}></div>
        <div className={styles.dev_Box}></div>
        <div className={styles.dev_Box}></div>
        <div className={styles.dev_Box}></div>
        <div className={styles.dev_Box}></div>
        <div className={styles.dev_Box}></div>
       
      </div>
      </div>
     
    </section>
  );
}

export default Top10;
