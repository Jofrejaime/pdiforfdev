import styled from "styled-components";

export const SomeArea = styled.div`
  width: max-content;
  border-radius: 8px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  :focus::after, :hover::after, :active:after{
    background: #4b0082;
    
  }
  div  {
  background-color: rgba(3, 3, 3, .31);
  color: #fff;
  padding: 1rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: clamp(1.5rem, 1.5rem + 2vw, 1.5rem);
}
`;
