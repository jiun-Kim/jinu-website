import styled from "styled-components";

const Text = styled.h1`
  font-size: calc(0.5vw + 14px);
  font-weight: 500;
  margin-bottom: 15px;
  text-align: center;
`;

const ChooseText = ({ text }) => <Text>{text}</Text>;

export default ChooseText;
