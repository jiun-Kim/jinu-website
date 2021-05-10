import styled from "styled-components";
import { blink } from "../components/animation";

const Container = styled.div`
  margin-top: 20px;
  padding: 40px;
  color: white;
  display: flex;
  justify-content: center;
  span {
    cursor: pointer;
  }
`;
const Test = styled.span`
  font-size: 5vw;
  margin-top: 250px;
  color: white;
  animation: ${blink} 2s linear infinite;
`;
const Service = () => {
  return (
    <Container>
      <Test>Sorry... It will be on service soon</Test>
      <a href="/">
        <span>Go back to home</span>
      </a>
    </Container>
  );
};

export default Service;
