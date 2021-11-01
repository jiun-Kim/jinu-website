import { useEffect, useState } from "react";
import { useMedia } from "react-use-media";
import styled from "styled-components";
import { HelmetTitle } from "../../share";
import GoHome from "../GoHome";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  h1 {
    font-size: calc(2vw + 12px);
    font-weight: 500;
    text-align: center;
  }
`;

const TruthBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: ${(props) => (props.opa ? 1 : 0)};
  transition: opacity 3s ease-in-out;
`;

const Img = styled.img`
  width: ${(props) => (props.isMobile ? "300px" : "none")};
`;

const Fin = () => {
  const isMobile = useMedia({
    maxWidth: 400,
  });
  const [ok, setOk] = useState(false);
  const [opa, setopa] = useState(false);
  useEffect(() => {
    setTimeout(() => setOk(true), 5000);
    if (ok) {
      setTimeout(() => setopa(true), 1000);
    }
  }, [ok]);
  return (
    <Container>
      <HelmetTitle title="It's Prank!" />
      {ok ? (
        <TruthBox opa={opa}>
          <Img isMobile={isMobile} src="../frog.gif" alt="Frog" />
          <h1>It's time to tell the truth.</h1>
          <GoHome />
        </TruthBox>
      ) : (
        <h1>How does it feel to win division 1 jackpot the lottery?</h1>
      )}
    </Container>
  );
};

export default Fin;
