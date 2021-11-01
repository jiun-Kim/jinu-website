import styled from "styled-components";

const WinningContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: ${(props) => (props.showPrize ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  color: black;
  position: absolute;
  z-index: 10;
  backdrop-filter: blur(10px);

  top: 50px;
`;

const WinningBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 260px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  h1 {
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 18px;
    opacity: 0.7;
    font-weight: 500;
    line-height: 1.2;
  }
`;

const Woohoo = styled.div`
  width: 230px;
  height: 50px;
  border-radius: 30px;
  background-color: ${(props) =>
    props.bgColor === "Oz" ? props.theme.lightOz : props.theme.lightAusPB};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: 25px;
  margin-top: 30px;
  cursor: pointer;
  :hover {
    background-color: ${(props) =>
      props.bgColor === "Oz" ? props.theme.ozLotto : props.theme.darkAusPB};
  }
`;

const WoohooBtn = ({ bgColor, showPrize, setShowPrize }) => {
  return (
    <WinningContainer showPrize={showPrize}>
      <WinningBox>
        <h1>Winning Ticket</h1>
        <Text>
          <span>Congratulations!</span>
          <span>You've had a win.</span>
        </Text>
        <Woohoo bgColor={bgColor} onClick={() => setShowPrize(true)}>
          Woohoo!
        </Woohoo>
      </WinningBox>
    </WinningContainer>
  );
};

export default WoohooBtn;
