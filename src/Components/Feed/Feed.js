import React from "react";
import { useState } from "react";
import ProfileInfo from "../Profile/ProfileInfo";
import Trabalhos from "../Profile/Trabalhos";
import ProjectModal from "../Projects/ProjectModal";
import Projects from "../Projects/Projects";
import styles from "./Feed.module.css";
function Feed() {
  const [modalProject, setModalProject] = useState(null)
  return (
    <section className={styles.containerFeed}>
     { modalProject &&  <ProjectModal project={modalProject}/>}
      <Projects  setModalProject={setModalProject}/>
      </section>
  );
}

export default Feed;
