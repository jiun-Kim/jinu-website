import styled from "styled-components";

const Container = styled.a`
  padding: 30px;
  width: 100%;
  height: 230px;
  background-image: linear-gradient(#dfe6e9, #222f3e);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  position: relative;
`;

const Image = styled.img`
  width: 300px;
`;
const TitleBox = styled.div`
  width: 90%;
  position: absolute;
  bottom: -20px;
  color: #222f3e;
  background-color: ${(props) => props.theme.bgColor};
  padding: 15px 0px;
  border-radius: 10px;
  box-shadow: 0px 5px 5px black;
  text-align: center;
`;
const AppTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

const AppSubtitle = styled.span`
  font-weight: 500;
`;

const App = ({ appUrl, imageUrl, title, text }) => (
  <Container href={appUrl} target="_blank">
    <TitleBox>
      <AppTitle>{title}</AppTitle>
      <AppSubtitle>{text}</AppSubtitle>
    </TitleBox>
    <Image src={imageUrl} />
  </Container>
);

export default App;
