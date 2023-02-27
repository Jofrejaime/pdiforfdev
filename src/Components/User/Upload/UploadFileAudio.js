import React from "react";
import { useDropzone } from "react-dropzone";
import { DropContainer, UploadMessage } from "./UploadFilesStyle";

const UploadFileAudio = (props) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDropAccepted: props.children,
    accept: {
      "audio/*": [],
    },
  });
  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive)
      return <UploadMessage>Arraste os seus Audios aqui...</UploadMessage>;
    if (isDragReject)
      return <UploadMessage type="error"> Aquivo não suportado</UploadMessage>;
    return <UploadMessage type="sucess">Solte os aqui</UploadMessage>;
  }

  function onDropAccepted() {
    props.children();
  }
  return (
    <DropContainer
      {...getRootProps()}
      isDragActive={isDragActive}
      isDragAccept={isDragAccept}
      isDragReject={isDragReject}
      onChange={onDropAccepted}
    >
      <input {...getInputProps()} />
      {renderDragMessage(isDragActive, isDragReject)}
    </DropContainer>
  );
};

export default UploadFileAudio;
