import { faFileImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDropzone } from "react-dropzone";
import { DropContainer, UploadMessage } from "./UploadFilesStyle";

const UploadFileImage = (props) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDropAccepted: props.children,
    accept: {
      "image/*": [],
    },
  });
  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive)
      return <UploadMessage>Arraste as suas imagens aqui...</UploadMessage>;
    if (isDragReject)
      return <UploadMessage type="error"> Aquivo não suportado</UploadMessage>;
    return <UploadMessage type="sucess">Solte as aqui</UploadMessage>;
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
      <FontAwesomeIcon icon={faFileImage} />
    </DropContainer>
  );
};

export default UploadFileImage;
