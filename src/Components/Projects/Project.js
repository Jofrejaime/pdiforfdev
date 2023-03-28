import React, { useState } from "react";
import styles from "./Projects.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faStar } from "@fortawesome/free-solid-svg-icons";
import { filesUrl } from "../services/api";
function Project({project, setModalProject, setView}) {
  const [option, setOption] = useState(false);
  function handleClick(){
    setView(project)
  setModalProject(project)
  }
  return (
    <div className={styles.projectContainer} >
      <div className={styles.project}>
        <div className={styles.projectCover}>
          <div className={styles.coverWrapper} onClick={handleClick}>
            <div className={styles.coverContent}>
              <div className={styles.colorDomain}></div>
              <picture>
                <img src={filesUrl + project.project.files +'/'+ project.files[0]} alt={project.project.title} />
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
                   {project.project.title}
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
                        <img src={filesUrl + project.project.user.profile.photo_url}  alt={project.project.title}/>
                      </span>
                      <NavLink to={`user/userName=${project.project.user.userName}`}>{project.project.user.userName}</NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className={styles.statsOfProject}>
              <div className={styles.stats}>
                <FontAwesomeIcon icon={faStar} />
                <span>{project.project.Stars.length}</span>
                <FontAwesomeIcon icon={faComment} />
                <span>{project.project.Comment.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
