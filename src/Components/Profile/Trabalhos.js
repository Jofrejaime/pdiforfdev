import React from 'react'
import Projects from '../Projects/Projects'
import styles from './Trabalhos.module.css'
function Trabalhos() {
  return (<div className={styles.works}>
    <div className={styles.head}>
      <a className={styles.head_works}>Trabalhos</a>
      <a className={styles.onlyme}>Apenas Eu</a>
      <a className={styles.parceria}>Em Parceria</a>
    </div>
    <div className={styles.works_Projects}>
      <Projects />
    </div>
  </div>
    
  )
}

export default Trabalhos