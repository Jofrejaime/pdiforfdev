import React, { Component } from "react";
import styles from "./Upload.module.css";
import UploadFile from "./UploadFileImage";
import FileList from "../FileList/FileList";
import { uniqueId } from "lodash";
import { filesize } from "filesize";
import api from "../../services/api";
import UploadFileAudio from "./UploadFileAudio";
import UploadFileVideo from "./UploadFileVideo";

export default class Upload extends Component {
  state = {
    uploadedFileList: [],
  };
  
  handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      Uploaded: false,
      error: false,
    }));

    this.setState({
      uploadedFileList: this.state.uploadedFileList.concat(uploadedFiles),
    });
    uploadedFiles.forEach(this.processUpload);
  };
  updateFile = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFileList.map((uploadedFile) => {
        return id === this.updateFile.id
          ? { ...uploadedFile, ...data }
          : this.updateFile;
      }),
    });
  };
  processUpload = (file) => {
    const data = new FormData();
    data.append("file", file.file);
    data.append('userName', this.props.userName);
    data.append('title', this.props.projectTitle)
    api.post("project", data, 
    {
      onUploadProgress: (e) => {
        const progress = parseInt(Math.round((e.loaded * 10) / e.total));
        this.updateFile(file.id, {
          progress,
        });
      },
    }).then(res =>{
      this.updateFile(file.id, { 
      })
    });
  };
  render() {
    const { uploadedFileList } = this.state;
    const { label } = this.props;

    return (
      <>
        <label>{label}</label>
        <div
          className={styles.inputFile}
          onChange={
            !!uploadedFileList.length
              ? this.props.callFiles(uploadedFileList)
              : () => {}
          }
        >
          <section>
            <UploadFile>{this.handleUpload}</UploadFile>
            <UploadFileAudio>{this.handleUpload}</UploadFileAudio>
            <UploadFileVideo>{this.handleUpload}</UploadFileVideo>
          </section>

          {!!uploadedFileList.length && <FileList files={uploadedFileList} />}
        </div>
      </>
    );
  }
}
