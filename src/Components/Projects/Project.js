import React, { useState } from "react";
import styles from "./Projects.module.css";
import Avatar from "../../assets/img/image.jpg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faStar } from "@fortawesome/free-solid-svg-icons";
import { filesUrl } from "../services/api";
function Project({project, setModalProject}) {
  const [option, setOption] = useState(false);
  function handleClick(){
    setModalProject(project)
  }
  return (
    <div className={styles.projectContainer} onClick={handleClick}>
      <div className={styles.project}>
        <div className={styles.projectCover}>
          <div className={styles.coverWrapper}>
            <div className={styles.coverContent}>
              <div className={styles.colorDomain}></div>
              <picture>
                <img src={filesUrl + project.icon} />
              </picture>
              <div className={styles.coverOverlay}>
                <div className={styles.projectCoverNeue}></div>
                <NavLink to={"#"}></NavLink>
                <div className={styles.projectOptions}>
                  <span className={styles.moreOptions} onClick={()=>setOption(!option)}>
                    <div className={styles.circles}>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className={styles.option} >
                    <div className={styles.optionList}>Denunciar</div>
                  </div>
                  </span>
                  
                </div>
                <div className={styles.projectDetails}>
                  <div className={styles.projectInfoName}>
                    <NavLink to={"#"} style={{}}>
                   {project.label}
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
                      <NavLink to={"user"}>{project.label}</NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className={styles.statsOfProject}>
              <div className={styles.stats}>
                <FontAwesomeIcon icon={faStar} />
                <span>{1}</span>
                <FontAwesomeIcon icon={faComment} />
                <span>{2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
