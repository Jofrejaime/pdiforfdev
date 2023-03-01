import React, { Component } from "react";
import styles from "./Upload.module.css";
import UploadFile from "./UploadFileImage";
import FileList from "../FileList/FileList";
import { uniqueId } from "lodash";
import { filesize } from "filesize";
import FileListGlobal from "../FileList/FileListGlobal";
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
