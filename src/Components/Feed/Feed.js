import React from 'react'
import ProfileInfo from '../Profile/ProfileInfo'
import Trabalhos from '../Profile/Trabalhos'
import styles from './Feed.module.css'
function Feed() {
  return (
    <div className={styles.containerFeed}>
    <ProfileInfo />
    <Trabalhos />
  </div>
  )
}

export default Feed