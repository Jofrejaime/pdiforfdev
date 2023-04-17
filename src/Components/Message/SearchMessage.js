import React from 'react'
import styles from './MessageStyle.module.css'
function SearchMessage() {
  return (
    <div className={styles.discussion + ' '+ styles.search}>
    <div className={styles.searchbar}>
      <i className="fa fa-search" aria-hidden="true"></i>
      <input type="text" placeholder="Search..."></input>
    </div>
  </div>
  )
}

export default SearchMessage