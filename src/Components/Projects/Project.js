import React from "react";
import styles from "./Projects.module.css";
import Avatar from "../../assets/img/image.jpg";
import Pdi from "../../assets/img/pdi.jpg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDot,
  faComment,
  faDotCircle,
  faHandDots,
  faListDots,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
function Project() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.project}>
        <div className={styles.projectCover}>
          <div className={styles.coverWrapper}>
            <div className={styles.coverContent}>
              <div className={styles.colorDomain}></div>
              <picture>
                <img src={Pdi} />
              </picture>
              <div className={styles.coverOverlay}>
                <div className={styles.projectCoverNeue}></div>
                <NavLink to={"#"}></NavLink>
                <div className={styles.projectOptions}>
                  <span className={styles.moreOptions}>
                    <div className={styles.circles}>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </span>
                </div>
                <div className={styles.projectDetails}>
                  <div className={styles.projectInfoName}>
                    <NavLink to={"#"} style={{}}>
                      Projecto
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.coverStates}>
            <span className={styles.usersProject}>
              <div className={styles.coverStatsOwner}>
                <div className={styles.coverStat}>
                  <div className={styles.profileUser}>
                    <span>
                      <span className={styles.Avatar}>
                        <img src={Avatar} />
                      </span>
                      <NavLink to={"user"}>Jofre Jaime</NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className={styles.statsOfProject}>
              <div className={styles.stats}>
                <FontAwesomeIcon icon={faStar} />
                <span>3,5mil</span>
                <FontAwesomeIcon icon={faComment} />
                <span>5mil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
