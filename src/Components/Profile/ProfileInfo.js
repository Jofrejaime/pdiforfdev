import {
  faFileCircleCheck,
  faLocationDot,
  faUserMinus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./ProfileInfo.module.css";
import Button from "../Form/Button";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { filesUrl } from "../services/api";

function ProfileInfo() {
  const { data } = useContext(UserContext);
  return (
    <div className={styles.profile_info}>
      <div className={styles.info}>
        {" "}
        <div className={styles.photo}>
          <img
            src={`${filesUrl}${data && data.profile.photo_url}`}
            alt={data && data.userName}
            className={styles.profile_photo}
          />
        </div>
        <p className={styles.profile_name}>
          {data && data.profile.firstName + " " + data.profile.lastName}
        </p>
        <p className={styles.username}>{data && `</${data.userName}>`}</p>
        <div className={styles.profile_area}>
          {data &&
            data.profile.AreaofProfile.map((area) => <p>{area.areaLabel}</p>)}
        </div>
        <p className={styles.location}>
          <FontAwesomeIcon icon={faLocationDot} />{" "}
          {data && data.profile.paisLabel}
        </p>
        <div className={styles.status}>
          <div>
            <span>
              <FontAwesomeIcon icon={faUsers} /> <p>{0} seguidores </p>
            </span>
            <span>
              <FontAwesomeIcon icon={faUserMinus} />
              <p>{0} seguindo </p>
            </span>
            <span>
              <FontAwesomeIcon icon={faFileCircleCheck} />
              <p>{data.projects.length} </p>
            </span>
          </div>
        </div>
        <div className={styles.description}>{data && data.profile.bio}</div>
        <div className={styles.seguir}>
          <Button>Editar Perfil</Button>
        </div>
        <div className={styles.utilities}>
          <p className={styles.utilitiesTitle}>Habilidades em</p>
          <ul className={styles.utilitiesList}>
            {data &&
              data.profile.LanguageOfProfile.map((language) => (
                <li>
                  <img
                    src={`${filesUrl}/${language.Language.icon_url}`}
                    alt={language.Language.label}
                  />
                </li>
              ))}
          </ul>
        </div>
        <div className={styles.utilities}>
          <p className={styles.utilitiesTitle}>Editors</p>
          <ul className={styles.utilitiesList}>
            {data &&
              data.profile.ToolofProfile.map((editor) => (
                <li>
                  <img
                    src={`${filesUrl}/${editor.Tool.icon_url}`}
                    alt={editor.Tool.label}
                  />
                </li>
              ))}
          </ul>
        </div>
        <div className={styles.repository + " " + styles.utilities}>
          <p className={styles.utilitiesTitle}>Links e Perfis</p>
          <ul className={styles.links}>
            {data &&
              data.profile.LinksOfProfile.map((link) => (
                <li key={link.id}>
                  <a target={"_blank"} href={`http://${link.href}`}>
                    <img
                      src={process.env.PUBLIC_URL + `${link.src}`}
                      alt={link.alt}
                      style={{ width: "40px" }}
                    />
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <footer className={styles.footerProfile}>
          {data && "Membro Desde " + data.profile.created_at.split("T")[0]}
        </footer>
      </div>
    </div>
  );
}

export default ProfileInfo;
