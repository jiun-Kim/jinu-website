import styled from "styled-components";

const Button = styled.a`
  width: 120px;
  background-color: ${(props) => props.theme.mainColor};
  text-align: center;
  color: white;
  padding: 10px;
  border-radius: 25px;
  margin-top: 20px;
  cursor: pointer;
`;

const GoHome = () => {
  return <Button href="/">Go Home</Button>;
};

export default GoHome;
