import styled from "styled-components";
import Header from "./Header";
import Typical from "react-typical";
import { sliderText } from "./animation";
import { HelmetTitle } from "../share";

const Container = styled.div`
  margin-top: 20px;
  padding: 2.5%;
  color: white;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7vw;
  font-weight: 100;
  margin-top: 2em;
  margin-bottom: 1.5em;
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  height: 30vh;
  font-size: 14px;
  overflow: hidden;
  p {
    font-size: calc(1vw + 14px);
    margin-top: 50px;
    white-space: nowrap;
  }
`;
const Text = styled.p`
  animation: ${sliderText} 15s linear infinite;
  &:hover {
    cursor: pointer;
    animation-play-state: paused;
  }
`;
const Email = styled.span`
  color: yellow;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
const copy = () => {
  document.execCommand("copy");
  alert("Email address has been copied");
};

const Home = () => {
  return (
    <Container>
      <HelmetTitle title="Home" />
      <Header />
      <Main>
        <Typical
          steps={["HOW ZIT GO EN,", 1000, "HOW ZIT GO EN, MATE?", 500]}
          wrapper="p"
        />
      </Main>
      <Footer>
        <Text>
          If your business is falling and you don't know why, please contact the
          email <Email onClick={copy}>lrnngman@gmail.com</Email>👈🏻 written here.
          What I do is clean up your shit!
        </Text>
        <span>&copy; 2021 JINU STUDIO</span>
      </Footer>
    </Container>
  );
};

export default Home;
