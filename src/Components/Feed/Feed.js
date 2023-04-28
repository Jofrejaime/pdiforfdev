import React, { useEffect } from "react";
import { useState } from "react";
import ProjectModal from "../Projects/ProjectModal";
import Projects from "../Projects/Projects";
import styles from "./Feed.module.css";
import { useLocation } from "react-router-dom";
function Feed({area, language, label, projects}) {
  const [modalProject, setModalProject] = useState(null);
  const location = useLocation();
  const [user, setUser] = useState()
  useEffect(()=>{setUser(location.pathname.split("/")[1])
},[location])
  return (
    <section className={styles.containerFeed}>
      {modalProject && (
        <ProjectModal
          project={modalProject}
          setModalProject={setModalProject}
        />
      )}
      <Projects setModalProject={setModalProject} area={area} label={label} language={language}  projects={projects}/>
    </section>
  );
}

export default Feed;
