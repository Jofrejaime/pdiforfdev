import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import {Container, FileInfo, Preview, State} from './FileListStyle';
function FileList() {
  return (
   <Container>
    <li>
      <FileInfo>
        <Preview src='../../../assets/svg/logo.svg'/>
        <div>
          <strong>
            profile.png
          </strong>
          <span>100kb <button>Excluir</button></span>
        </div>
      </FileInfo>
      <State>
        <CircularProgressbar
        styles={{
          root: {width: 24},
          path: {stroke: '#092322'}
        }}
        strokeWidth={10}
        percentage={60}
        />

          <FontAwesomeIcon icon={faCircleCheck} fill='#78e5d5'/>
          <FontAwesomeIcon icon={faCircleExclamation} fill='#e57878'/>
       
      </State>
    </li>
   </Container>
  )
}

export default FileList