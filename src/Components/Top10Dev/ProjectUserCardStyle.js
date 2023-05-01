import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  min-height: 10vh;
  background: linear-gradient(135deg, #e3dbf6, #a99bf9);
  padding: 10px;
`;
export const Card = styled.div`
  width: 350px;
  height: 515px;
  margin: 100px auto 0;
  perspective:1000px;
`;
export const CardInner = styled.div`
  div:hover &{
transform: rotateY(180deg);
  }

  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style:preserve-3d;
`;
export const Front = styled.div`
  color: #fff; 
  background-image: url(${props=>props.src});
  background-size: cover;
  background-position: center;
`;
export const FFront = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: url(${(props) => props.src});
  background-size: cover;
  padding: 60px 40px;
  position: absolute;
  backface-visibility: hidden;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  h2 {
    font-weight: 500;
  }
  p {
    font-size: 13px;
    color: #ccc;
  }
  button {
    width: 120px;
    border: 1px solid #fff;
    border-radius: 8px 20px;
    cursor: pointer;
    margin-top: 20px;
    color: #fff;
  }
`;
export const Back = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  position: absolute;
  backface-visibility: hidden;
  background: #fff;
  color: #333;
  padding: 20px 40px;
  transform: rotateY(180deg);
  div {
    background: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  h1 {
    font-size: 50px;
    line-height: 55px;
    margin-bottom: 10px;

    span {
      font-weight: 400;
    }
  }
  p {
    font-size: 14px;
  }
`;
export const Row = styled.div`
margin: .75rem auto;
display: flex;
align-items:center;
justify-content: center;
div{
  font-family: var(--type-code3);
  ::after{
    content: '';
    width: 1px;
    height: 20px;
    background: #7800ad;
    position: absolute;
    top: 5px;
    right: 0;
  }
  :last-child::after{
display: none;
  }
  flex: 1;
  align-items: center;
  color: #555;
  font-size: .75rem;
  position: relative;
  h2{font-size: 1rem;}
p{margin-top: 5px; margin-right:5px ;}}

button{
  background: #7800ad;
  color: #fff;
  border: 0;
  outline: 0;
  padding: 8px 25px;
  border-radius: 2rem;
  font-size: 14px;
  margin-right: .9rem;
  box-shadow: 0 8px 10px rgba(120, 0, 173, 0.3)
}
a{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 5px 10px rgba(0,0,0,0.2)
  display: flex;
  align-items:center;
  justify-content: center;
  margin: 0 5px;
  img{
    width: 50%;
  }
}
`;