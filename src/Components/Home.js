import React from "react";
import styles from "./Home.module.css";
import Top10 from "./Top10Dev/Top10";

import Projects from "./Projects/Projects";
function Home() {

  return (
    <div>
    
      <Top10 />
      <section className={"container"}>
        <div className={styles.today}>
          <p className={styles.texto}>Para Hoje</p>
        </div>
      </section>
      <section className="container">
          <Projects />
      </section>
    
    </div>
  );
}

export default Home;
