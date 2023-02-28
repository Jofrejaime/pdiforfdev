import React from "react";
import Project from "./Project";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.projectsContent}>
        <Project />
        <Project /> <Project /> <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Projects;
