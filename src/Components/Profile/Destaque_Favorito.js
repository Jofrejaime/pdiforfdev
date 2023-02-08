import React from "react";
import styles from "./Destaque_Favorito.module.css";
import Projects from "../Projects/Projects";
function Destaque_Favorito() {
  return (
    <div className={styles.dest_fav}>
      <div className={styles.head}>
      
        <a className={styles.dest}>Em Destaque</a>
        <a className={styles.fav}>Favoritos</a>
      </div>
      <div className={styles.dest_fav_Projects}>
        <Projects />
      </div>
    </div>
  );
}

export default Destaque_Favorito;
