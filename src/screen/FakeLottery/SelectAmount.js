import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ChooseBox from "../../components/fakeLottery/ChooseBox";
import ChooseText from "../../components/fakeLottery/ChooseText";
import routes from "../../routes";

const AmountForm = styled.form`
  display: flex;
  align-items: center;
  height: 100vh;
  span {
    margin-right: 5px;
  }
`;

const SelectAmount = () => {
  const [amount, setAmount] = useState("");
  const history = useHistory();
  const onSubmit = () => {
    const state = history.location.state;
    history.push({
      pathname: routes.fakeLotteryAus,
      state: {
        amount,
        country: state,
      },
    });
  };
  const onChange = (e) => {
    let v = e.target.value;
    v = v.replace(/[^0-9]/g, "");
    const result = parseInt(v);
    setAmount(result);
  };
  return (
    <ChooseBox>
      <ChooseText>Enter the prize money for the winner.</ChooseText>
      <AmountForm onSubmit={onSubmit}>
        <span>$</span>
        <input
          onChange={onChange}
          type="text"
          value={isNaN(amount) ? "" : amount.toLocaleString("en-AU")}
          placeholder="1,000,000,000"
        />
        <button>Let's prank</button>
      </AmountForm>
    </ChooseBox>
  );
};

export default SelectAmount;
