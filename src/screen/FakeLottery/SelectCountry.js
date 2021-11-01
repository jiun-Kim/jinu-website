import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Buttons from "../../components/fakeLottery/Buttons";
import ChooseBox from "../../components/fakeLottery/ChooseBox";
import ChooseText from "../../components/fakeLottery/ChooseText";
import routes from "../../routes";
import { HelmetTitle } from "../../share";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Flag = styled.img`
  width: 110px;
  margin: 0 10px;
  cursor: pointer;
`;

const SelectCountry = () => {
  const history = useHistory();
  return (
    <Container>
      <HelmetTitle title="Select Country" />
      <ChooseText text="Choose the country where the lottery is issued." />
      <ChooseBox>
        <Flag
          onClick={() =>
            history.push({
              pathname: routes.fakeLotteryTicket,
              state: "Aus",
            })
          }
          src="https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg"
        />
      </ChooseBox>
      <Buttons />
    </Container>
  );
};

export default SelectCountry;
