import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/fakeLottery/Aus/Header";
import Navigator from "../../components/fakeLottery/Aus/Navigator";
import { HelmetTitle } from "../../share";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import WoohooBtn from "../../components/fakeLottery/Aus/WoohooBtn";
import routes from "../../routes";
import { useMedia } from "react-use-media";
import CheckTicket from "../../components/fakeLottery/Aus/CheckTicket";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;

const Main = styled.main`
  background-color: #ffffff;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 10px;
  overflow: hidden;
`;

const MainTitle = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  font-size: 40px;
  font-weight: 600;
  padding: 20px 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Winner = styled.div`
  height: 100vh;
  background-color: ${(props) =>
    props.bgColor === "Oz" ? props.theme.ozLotto : props.theme.powerball};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 50px;
  p {
    font-size: 20px;
    font-weight: 400;
    word-break: keep-all;
    text-align: center;
    line-height: 1.2;
  }
  img {
    width: 100%;
    height: 450px;
  }
`;

const AmountBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  margin: 30px 0;
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 30px;
  }
`;

const ClaimBtn = styled.a`
  margin: 30px 0;
  border: none;
  font-size: 18px;
  padding: 15px 50px;
  border-radius: 30px;
  color: #101c4e;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
`;

const AusPower = () => {
  const { width, height } = useWindowSize();
  const [winner, setWinner] = useState(false);
  const [showPrize, setShowPrize] = useState(false);
  const { state } = useLocation();
  const isMobile = useMedia({
    maxWidth: 400,
  });
  return (
    <div style={{ backgroundColor: "#101c4e" }}>
      <Container>
        {winner ? (
          <HelmetTitle title="Congratulations!" />
        ) : (
          <HelmetTitle title="Check Ticket" />
        )}
        <Header />
        <Navigator isMobile={isMobile} />
        <Main>
          {winner && (
            <Confetti width={isMobile ? 350 : width} height={height} />
          )}
          {winner ? (
            <Winner bgColor={state.country}>
              {state.country === "Oz" ? (
                <img
                  alt="Oz lotto logo"
                  src="https://www.ozlotteries.com/public/images/pub/meta/au/oz_lotto.jpg"
                />
              ) : (
                <img
                  alt="Powerball logo"
                  src="https://www.ozlotteries.com/public/images/pub/meta/au/powerball2018.jpg"
                />
              )}
              <WoohooBtn
                bgColor={state.country}
                showPrize={showPrize}
                setShowPrize={setShowPrize}
              />
              <AmountBox>
                <h3>YOU HAVE WON:</h3>
                <h1>${state.amount.toLocaleString("en-AU")}</h1>
              </AmountBox>
              <p>
                Congratulations, you have won a Division 1 prize!. If you
                purchased this ticket online your prize will be paid into your
                online account.
              </p>
              <ClaimBtn href={routes.fakeLotteryFin}>Claim prize</ClaimBtn>
            </Winner>
          ) : (
            <>
              <MainTitle>
                <h1>Check my ticket</h1>
              </MainTitle>
              <CheckTicket setWinner={setWinner} />
            </>
          )}
        </Main>
      </Container>
    </div>
  );
};

export default AusPower;
