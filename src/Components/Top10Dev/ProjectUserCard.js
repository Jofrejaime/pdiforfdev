import React from "react";
import {
  Back,
  Card,
  CardInner,
  Container,
  Front,
  Row,
} from "./ProjectUserCardStyle";
import stylesPU from "./ProjectUserCard.module.css";
import styles from './FlipCard.module.css'
import { filesUrl } from "../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faGrinStars, faStar, faStarAndCrescent, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
function ProjectUserCard({ info }) {
  const { project, files } = info;
  return (
    <div className={stylesPU.card}>
      <div className={stylesPU.card_inner}>
        <Front src={(filesUrl+project.files+'/'+files[0]).replace(/ /gi, '%20')}  className={stylesPU.front}>
          <div className={stylesPU.b}>
          <span>{project.title}</span>
          <p>{project.AreaOfProject.map(area=><span key={area.areaLabel}>{area.areaLabel+ ' '}</span>)}</p>
          <div className={stylesPU.status}>
          <button>By: {project.user.userName}</button>
          <div> {project._count.Views} <FontAwesomeIcon icon={faEye} /></div>
          <div> {project._count.Stars} <FontAwesomeIcon icon={faStarHalfAlt}/></div>
          </div>
          </div>
          
        </Front>
        <div className={stylesPU.back}>
         <div className={stylesPU.profile_image}><img src={filesUrl+project.user.profile.photo_url} alt={project.user.userName}/></div> 
          <h1>
            {project.user.profile.firstName}
              <span> {project.user.profile.lastName}</span>
          </h1>
         {project.user.profile.bio &&  <p className={stylesPU.bio}>{project.user.profile.bio}</p>}
          <Row>
            <div>
              <h2>12k</h2>
              <p>followers</p>
            </div>
            <div>
              <h2>122k</h2>
              <p>following</p>
            </div>
            <div>
              <h2>12k</h2>
              <p>likes</p>
            </div>
          </Row>
          <Row>
            <button>Follow me</button>
          </Row>
        </div>
      </div>
    </div>
  );
  /* return (
    <div className={styles.flip_container}>
      <div className={styles.flip_inner_container}>
        <div className={styles.flip_front}>
          <img src={filesUrl + '/'+project.files+'/'+files[0]} alt={project.title} />
        </div>
        <div className={styles.flip_back}>
          <div className={styles.profile_image}>
            <img src={filesUrl+'/'+project.user.profile.photo_url} alt={project.user.userName} />
            <h2>{project.user.profile.firstName +' ' +project.user.profile.lastName}</h2>
            <h3>{project.user.userName}</h3>
            <p>{project.user.profile.AreaofProfile.map(area=> <span>{area.areaLabel}</span> )}</p>

            <ul>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );*/
}

export default ProjectUserCard;
