import styled from "styled-components";

export const SomeArea = styled.div`
  width: max-content;
  border-radius: 8px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;
