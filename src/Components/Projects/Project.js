import React, { useContext, useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEye, faEyeSlash, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { filesUrl } from "../services/api";
import starProject from "./ProjectContent/StarOnProject";
import { UserContext } from "../../UserContext";
import useFetch from "../../Hooks/useFetch";
function Project({project, setModalProject, setView}) {
  const {data: logedUser}  = useContext(UserContext)
  const {request} =  useFetch()
  const [star, setStar] = React.useState(() => project.project.Stars);
  const [starred,  setStared] = useState
  (faStar)
  useEffect(()=>{
    if(logedUser){
    const  starredByUser =  star.find(star => star.userId === logedUser.id)
    if(starredByUser)
    setStared(faStar) 
    else setStared(faStarHalf)
  }
  }, [logedUser, star])
  const [option, setOption] = useState(false);
  function handleClick(){
    setView(project)
  setModalProject(project)
  }
  const img = ['.png', '.jpeg', '.jpg', '.JPEG', '.JPG', '.PNG']
  return (
    <div className={styles.projectContainer} >
      <div className={styles.project}>
        <div className={styles.projectCover}>
          <div className={styles.coverWrapper} onClick={handleClick}>
            <div className={styles.coverContent}>
              <div className={styles.colorDomain}></div>
              <picture>
                <img src={filesUrl + project.project.files +'/'+ project.files.find(file =>  img.some(ext=>file.endsWith(ext)))} alt={project.project.title} />
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
                    <span>
                    <FontAwesomeIcon icon={faEye}/> {project.project._count.Views}</span>
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
                      <NavLink to={`${project.project.user.userName}`}>{project.project.user.userName}</NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className={styles.statsOfProject}>
              <div className={styles.stats} onClick={()=> starProject({findedProject: project.project, setStar, logedUser, request, starred })}>
                <FontAwesomeIcon icon={starred} />
                <span>{star.length}</span>
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
