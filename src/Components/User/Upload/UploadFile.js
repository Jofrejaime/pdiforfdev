import React, {Component} from 'react';
import Dropzone, {useDropzone} from 'react-dropzone';
import {DropContainer, UploadMessage} from './UploadFilesStyle';
import Upload from './Upload';

export default class UploadFile extends Component {
  

/*
{
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDropAccepted: onUpload,
    accept: {
      'image/*': []
    }
  });*/

   renderDragMessage(isDragActive, isDragReject){
    if(!isDragActive)
    return <UploadMessage>Arraste aquivos aqui...</UploadMessage>
    if(isDragReject) return <UploadMessage type='error'>Aquivo não suportado</UploadMessage>
    return<UploadMessage type='sucess'>Solte os arquivos aqui</UploadMessage>
   } ;

   {onUpload} = this.props;
    
  render () {
    return (

    <Dropzone accept={'image/*'}  onDropAccepted={()=>{''}}>
      {({getRootProps, isDragActive, isDragAccept, isDragReject, getInputProps})=>    <DropContainer     
        {...getRootProps()}
        isDragActive={isDragActive}
        isDragAccept={isDragAccept}
        isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
        {this.renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>  }
      
        </Dropzone>
  )

}

}
 

