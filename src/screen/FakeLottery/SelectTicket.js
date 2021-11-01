import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Buttons from "../../components/fakeLottery/Buttons";
import ChooseBox from "../../components/fakeLottery/ChooseBox";
import ChooseText from "../../components/fakeLottery/ChooseText";
import routes from "../../routes";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Ticket = styled.img`
  width: 110px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 50%;
`;

const SelectTicket = () => {
  const history = useHistory();
  return (
    <Container>
      <ChooseText text="Choose the ticket where the lottery is issued." />
      {history.location.state === "Aus" && (
        <ChooseBox>
          <Ticket
            onClick={() =>
              history.push({
                pathname: routes.fakeLotteryAmount,
                state: "Pow",
              })
            }
            src="https://www.ozlotteries.com/public/images/pub/meta/au/powerball2018.jpg"
          />
          <Ticket
            onClick={() =>
              history.push({
                pathname: routes.fakeLotteryAmount,
                state: "Oz",
              })
            }
            src="https://www.ozlotteries.com/public/images/pub/meta/au/oz_lotto.jpg"
          />
        </ChooseBox>
      )}
      <Buttons />
    </Container>
  );
};

export default SelectTicket;
