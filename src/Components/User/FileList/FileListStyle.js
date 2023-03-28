import styled from "styled-components";

export const Container = styled.ul`
  margin-top: 20px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    div {
      strong {
        overflow: hidden;
        max-width: 20ch;
      }
    }
    & + li {
      margin-top: 15px;
    }
    video {
      border-radius: 5px;
      width: 100%;
      max-height: 500px;
      justify-self: center;
    }
    audio {
      justify-self: center;
      width: 100%;
      border-radius: 5px;
    }
  }
`;
export const State = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  svg {
    margin-left: 10px;
  }
`;
export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;
      display: flex;
      button {
        font-size: small;
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;
export const Preview = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`; 
export const  Img = styled.img`
  width: 100%;
  height: 500px;
  border-radius:2px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;`
  ;
export const Image = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 5px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;
export const Video = styled.video`
  width: 100%;
  height: 500px;
  border-radius: 5px;
`;
