import {
  faFileCircleCheck,
  faLocationDot,
  faUserMinus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./ProfileInfo.module.css";
import foto from "../../assets/svg/profile.svg";
import Button from "../Form/Button";

function ProfileInfo() {
  return (
    <div className={styles.profile_info}>
      <div className={styles.info}>
        {" "}
        <img
          src={foto}
          alt="Jofre Jaime Jamuinda Muto"
          className={styles.profile_photo}
        />
        <p className={styles.profile_name}> Jofre Jaime Jamuinda Muto</p>
        <div className={styles.profile_area}>
          {" "}
          <p>Full Stack Developer</p>
          <p>Mobile Dev</p>
        </div>
        <p className={styles.location}>
          <FontAwesomeIcon icon={faLocationDot} /> Angola
        </p>
        <div className={styles.status}>
          <div>
            <span>
              <FontAwesomeIcon icon={faUsers} /> {12} seguidores{" "}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserMinus} /> {13} seguindo{" "}
            </span>
            <span>
              <FontAwesomeIcon icon={faFileCircleCheck} /> {4} projectos
            </span>
          </div>
        </div>
        <div className={styles.description}>DEUS É AMOR ❤️</div>
        <div className={styles.seguir}>
          <Button>Editar Perfil</Button>
        </div>
        <div className={styles.utilities}>
          <p className={styles.utilitiesTitle}>Habilidades em</p>
          <ul className={styles.utilitiesList}>
            {["Java", "C#", "JavasCript", "PHP"].map((languages) => (
              <li>{languages}</li>
            ))}
          </ul>
        </div>
        <div className={styles.utilities}>
          <p className={styles.utilitiesTitle}>Editors</p>
          <ul className={styles.utilitiesList}>
            {["NoteBook", "vscode"].map((editors) => (
              <li>{editors}</li>
            ))}
          </ul>
        </div>
        <div className={styles.repository + " " + styles.utilities}>
          <p className={styles.utilitiesTitle}>Links e Perfis</p>

          <ul className={styles.links}>
            {[{id: 1, src: '/img/facebook.svg', href: 'fb.me/jofredenovais', alt: 'facebook'}, {id: 2, src: '/img/instagram.svg', href: 'instagram.com/jofredenovais', alt: 'instagram'}, {id: 3, src: '/img/github.svg', alt: 'github', href: 'gitHub.com/jofrejaime'}].map((link) => (
              <li key={link.id}>
                <a target={'_blank'} href={`http://${link.href}`}>
                  <img src={process.env.PUBLIC_URL + `${link.src}`} alt={link.alt}  style={{ width: "40px" }} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <footer className={styles.footerProfile}>Membro desde  03 03 2023</footer>
      </div>
    </div>
  );
}

export default ProfileInfo;
