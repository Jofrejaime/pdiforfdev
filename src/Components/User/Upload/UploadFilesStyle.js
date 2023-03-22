import styled, { css } from "styled-components";
const messageColor = {
  default: "#999",
  error: "#e57878",
  sucess: "#78e5d5",
};
const dragReject = css`
  border-color: #e57878;
  color: #e57878;
`;
const dragActive = css`
  border-color: #78e5d5;
  color: #78e5d5;
`;
export const DropContainer = styled.div.attrs({ className: "dropzone" })`
  border: 1px dashed #333333bb;
  border-radius: 4px;
  cursor: pointer;
  transition: height 0.3s ease;
  ${(props) => props.isDragActive && dragActive}
  ${(props) => props.isDragReject && dragReject}
 display: flex;
 align-items: center;
 justify-content: center;
  svg{
    width: 2rem;
   font-size: 3rem;
   color: #0046CC;
  }
`;
export const UploadMessage = styled.p`
  display: flex;
  align-items: center;
  color: ${(props) => messageColor[props.type || "default"]};
  justify-content: center;
  padding: 15px 0;
`;
