import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import routes from "../../routes";
import { HelmetTitle } from "../../share";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const ChooseBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChooseText = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const FlagBox = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  width: 100px;
  height: 70px;
`;

const AmountForm = styled.form`
  display: flex;
  align-items: center;
  span {
    margin-right: 5px;
  }
`;

const FakeLottery = () => {
  const [select, setSelect] = useState(false);
  const [amount, setAmount] = useState("");
  const history = useHistory();
  const onSubmit = () => {
    history.push({
      pathname: routes.fakeLotteryAus,
      state: amount,
    });
  };
  const onChange = (e) => {
    let v = e.target.value;
    v = v.replace(/[^0-9]/g, "");
    const result = parseInt(v);
    setAmount(result);
  };
  return (
    <Container>
      <HelmetTitle title="Fake lottery" />
      {select ? (
        <ChooseBox>
          <ChooseText>Enter the prize money for the winner.</ChooseText>
          <AmountForm onSubmit={onSubmit}>
            <span>$</span>
            <input
              onChange={onChange}
              type="text"
              value={amount.toLocaleString("en-AU")}
              placeholder="1,000,000,000"
            />
            <button>Let's prank</button>
          </AmountForm>
        </ChooseBox>
      ) : (
        <ChooseBox>
          <ChooseText>
            Choose the country where the lottery is issued.
          </ChooseText>
          <FlagBox onClick={() => setSelect(true)}>
            <Image src="https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg" />
          </FlagBox>
        </ChooseBox>
      )}
    </Container>
  );
};

export default FakeLottery;
