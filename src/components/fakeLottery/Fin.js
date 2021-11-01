import styled from "styled-components";
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
    font-size: 5vw;
    font-weight: 500;
    text-align: center;
  }
`;

const Fin = () => {
  return (
    <Container>
      <img src="../frog.gif" alt="Frog" />
      <h1>It's time to tell the truth.</h1>
      <GoHome />
    </Container>
  );
};

export default Fin;
