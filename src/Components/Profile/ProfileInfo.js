import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./ProfileInfo.module.css";
import foto from "../../assets/svg/profile.svg";

function ProfileInfo() {
  return (
    <div className={styles.profile_info}>
      <img src={foto} alt="Jofre Jaime Profile"  className={styles.profile_photo}/>
      <p className={styles.profile_name}>Jofre Jaime</p>
      <div className={styles.profile_area}>
        {" "}
        <p>Full Stack Developer</p>
        <p>Mobile Dev</p>
      </div>

      <p className={styles.location}>
        <FontAwesomeIcon icon={faLocationDot} /> Angola
      </p>
    </div>
  );
}

export default ProfileInfo;
