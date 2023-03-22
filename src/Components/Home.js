import React from "react";
import styles from "./Home.module.css";
import Top10 from "./Top10Dev/Top10";

import Projects from "./Projects/Projects";
import Feed from "./Feed/Feed";
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
      <Feed/>
      </section>
    
    </div>
  );
}

export default Home;
