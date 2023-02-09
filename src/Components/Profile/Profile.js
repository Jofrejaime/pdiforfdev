import React from "react";
import Login from "../Login/Login";
import styles from "./Profile.module.css";
import { Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faStarHalfStroke,
  faTools,
  faUsersRectangle,
} from "@fortawesome/free-solid-svg-icons";
import Feed from "../../assets/svg/feed.svg";
import Add from "../Add/AddButton";
import Destaque_Favorito from "./Destaque_Favorito";
import Trabalhos from "./Trabalhos";
import ProfileInfo from "./ProfileInfo";
function Profile() {
  return (
    <div className={"container " + styles.profile}>
      <aside className={styles.profile_info}>
        <ProfileInfo />
      </aside>
      

      <section>
    
        <ul className={styles.profile_links}>
          <li>
            <Link to={""} className={styles.button + " " + styles.feed}>
              <FontAwesomeIcon icon={faUsersRectangle} />
            </Link>
          </li>
          <li>
            <Link to={""} className={styles.button}>
              <FontAwesomeIcon icon={faStarHalfStroke} />
            </Link>
          </li>
          <li>
            <Add />
          </li>
          <li>
            <Link to={""} className={styles.button}>
              <FontAwesomeIcon icon={faTools} />
            </Link>
          </li>

          <li>
            <Link to={"login"} className={styles.button}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Link>
          </li>
        </ul>
        <div>
          <Destaque_Favorito />
        </div>
        <div>
          <Trabalhos />
        </div>
      </section>
    </div>
  );
}

export default Profile;
