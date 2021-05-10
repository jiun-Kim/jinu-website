import Typical from "react-typical";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 2% 0 2%;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.div`
  height: 33%;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7vw;
  font-weight: 100;
  height: 33%;
`;
const Footer = styled.div`
  height: 33%;
`;

const FirstHome = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Typical
          steps={["HOW ZIT GO EN,", 1000, "HOW ZIT GO EN, MATE?", 500]}
          wrapper="p"
        />
      </Main>
      <Footer />
    </Container>
  );
};

export default FirstHome;
