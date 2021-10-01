import styled from "styled-components";

const ChoiceContainer = styled.div`
  width: 100%;
  height: 230px;
  background-image: linear-gradient(#dfe6e9, #222f3e);
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ChoiceLink = styled.a`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const ChoiceImage = styled.img`
  width: 90%;
  height: 50%;
  padding: 5px;
`;

const ChoiceBox = ({ ios, android }) => (
  <ChoiceContainer>
    <ChoiceLink href={ios}>
      <ChoiceImage src="/appstore.png" />
    </ChoiceLink>
    <ChoiceLink href={android}>
      <ChoiceImage src="/playstore.png" />
    </ChoiceLink>
  </ChoiceContainer>
);

export default ChoiceBox;
