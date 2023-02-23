import React from 'react'
import styles from './Upload.module.css'
import UploadFile from './UploadFile'
import FileList from '../FileList/FileList'


function Upload() {
  const state = {
    uploadFiles: [],
  }
  const handleUpload = files =>{
    console.log(files)
  }
  const {setOnUpload} = UploadFile;

  return (
    <div className={styles.inputFile}>
      <UploadFile setOnUpload={handleUpload}/>
      <FileList />
    </div>
  )
}

export default Upload