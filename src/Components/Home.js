import React from "react";
import styles from "./Home.module.css";
import Top10 from "./Top10Dev/Top10";
import Add from "./Add/AddButton";
import Project from "./Projects/Projects";
import { BrowserRouter } from "react-router-dom";
import Projects from "./Projects/Projects";
function Home() {
  return (
    <div>
    
      <Top10 />
      <section className={"container"}>
        <div className={styles.today}>
          <p className={styles.texto}>Para Hoje</p>
          <Add />
        </div>
      </section>
      <section className="container">
          <Projects />
      </section>
    
    </div>
  );
}

export default Home;
