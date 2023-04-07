import React from 'react'
import styles from './Profile.module.css'
import { filesUrl } from '../../services/api'
import 'boxicons'
function Skills({areas, languages, tools}) {
  return (
    <div
      className={styles.skills_content + " " + styles.grid}
      data-content
      id="skills"
    >
      <div className={styles.skills_area}>
        <h3 className={styles.skills_title}>Linguagens</h3>
        <div className={styles.skills_box}>
          <div className={styles.skills_group}>
         {languages.map(language=><div className={styles.skills_data}>
             <img src={filesUrl+language.Language.icon_url} className={styles.skills_icon} alt={languages.languageLabel}/>
              <div>
                <h3 className={styles.skills_name}>{language.languageLabel}</h3>
                <span className={styles.skills_level}>
              
                </span>
              </div>
            </div>) }
          </div>
        </div>
      </div>
      <div className={styles.skills_area}>
        <h3 className={styles.skills_title}>Ferramentas</h3>
        <div className={styles.skills_box}>
          <div className={styles.skills_group}>
         {tools.map(tool=>   <div className={styles.skills_data}>
             <img src={filesUrl+tool.Tool.icon_url} className={styles.skills_icon} alt={tool.toolLabel}/>
              <div>
                <h3 className={styles.skills_name}>{tool.toolLabel}</h3>
                <span className={styles.skills_level}>
                
                </span>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills