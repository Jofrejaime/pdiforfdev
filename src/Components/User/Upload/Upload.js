import React from 'react'
import styles from './Upload.module.css'
import UploadFile from './UploadFile'
function Upload() {
  return (
    <div className={styles.inputFile}>
      <UploadFile />
    </div>
  )
}

export default Upload