import styled, {css} from 'styled-components';

const messageColor = {
  default: '#999',
  error: '#e57878', 
  sucess: '#78e5d5',

}
const dragReject = css`
border-color: #e57878;
`;
const dragActive = css`
border-color: #78e5d5;
`;
export const DropContainer = styled.div.attrs({className: 'dropzone'})`
border: 1px dashed #333333bb;
border-radius: 4px ;
cursor: pointer;
transition: height .3s ease;
${props => props.isDragActive && dragActive}
${props => props.isDragReject && dragReject}
`;
export const  UploadMessage = styled.p`
 display: flex;
 align-items: center;
color: ${props=>messageColor[props.type || 'default']};
justify-content: center;
padding: 15px 0;
`; 