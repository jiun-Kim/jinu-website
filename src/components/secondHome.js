import styled from "styled-components";
import { useEffect, useState } from "react";

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
  span {
    text-align: center;
  }
`;
const Text = styled.span`
  opacity: ${(props) => (props.scroll ? 1 : 0)};
  transition: opacity 1.8s linear;
`;
const Footer = styled.div`
  height: 33%;
`;

const SecondHome = () => {
  const [scroll, setScroll] = useState(false);
  const getEvent = () => {
    const scrollLocation = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    if (windowHeight / 2 < scrollLocation) {
      return setScroll(true);
    } else {
      return setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", getEvent);
  }, [scroll]);
  return (
    <Container>
      <Header />
      <Main>
        <Text scroll={scroll}>
          I WILL SHOW YOU <br /> WHAT I BUILD
        </Text>
      </Main>
      <Footer />
    </Container>
  );
};

export default SecondHome;
