import React, {Component} from 'react';
import Dropzone, {useDropzone} from 'react-dropzone';
import {DropContainer, UploadMessage} from './UploadFilesStyle';

function UploadFile() {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: {
      'image/*': []
    }
  });

   function renderDragMessage(isDragActive, isDragReject){
    if(!isDragActive)
    return <UploadMessage>Arraste aquivos aqui...</UploadMessage>
    if(isDragReject) return <UploadMessage type='error'>Aquivo não suportado</UploadMessage>
    return<UploadMessage type='sucess'>Solte os arquivos aqui</UploadMessage>
   }
  return (

        <DropContainer 
        {...getRootProps()}
        isDragActive={isDragActive}
        isDragAccept={isDragAccept}
        isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
        {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
  
  )
}

export default UploadFile