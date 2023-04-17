import React from "react";
import styles from "./Toast.module.css";
import {ReactComponent as Logo} from "../../assets/svg/logo.svg";
function Toast({ msg }) {
  return (
    <div className={styles.toast + ' '+styles.is_on_screen}>
      <div className={styles.toast_content}>
        <Logo className={styles.toast_img}/>
        <p className={styles.toast_message}>{msg}</p>
      </div>
      <div className={styles.toast_ornament}></div>
    </div>
  );
}

export default Toast;
