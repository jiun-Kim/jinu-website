import styled from "styled-components";
import { blink } from "../components/animation";
import { HelmetTitle } from "../share";

const Container = styled.div`
  padding: 0 2% 0 2%;
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  a {
    margin-bottom: 5%;
  }
`;
const Test = styled.span`
  box-sizing: border-box;
  font-size: 5vw;
  color: white;
  animation: ${blink} 2s linear infinite;
`;
const GoToHome = styled.span`
  cursor: pointer;
  &:hover {
    color: #f39c12;
  }
`;
const Service = () => {
  return (
    <Container>
      <HelmetTitle title="SERVICE" />
      <a href="/">
        <GoToHome>🏚 Go back to home</GoToHome>
      </a>
      <Test>Sorry... It will be on service soon</Test>
    </Container>
  );
};

export default Service;
