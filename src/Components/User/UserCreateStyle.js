import styled from "styled-components";

export const Image = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;
