import { useState } from "react";
import styled from "styled-components";
import { appImage, appUrl } from "../apps";
import AppImage from "../components/AppImage";
import ChoiceBox from "../components/ChoiceBox";
import Header from "../components/Header";
import routes from "../routes";
import { HelmetTitle } from "../share";

const Container = styled.div``;

const Main = styled.main`
  padding: 50px 30px;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Apps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  row-gap: 100px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 120px;
  background-color: ${(props) => props.theme.mainColor};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
`;

const Home = () => {
  const [visibleBox, setVisibleBox] = useState(false);
  return (
    <Container>
      <HelmetTitle title="Welcome" />
      <Header />
      <Main>
        <Title>New Release</Title>
        <Apps>
          <AppImage
            appUrl={appUrl.watcha}
            text="This app is the Netflix cloning app"
            imageUrl={appImage.watcha}
          />
          {visibleBox ? (
            <ChoiceBox
              ios={appUrl.colorselectorIos}
              android={appUrl.colorselectorAndroid}
            />
          ) : (
            <AppImage
              text="Color selector app for ios & android"
              imageUrl={appImage.colorselector}
              visibleBox={true}
              setVisibleBox={setVisibleBox}
            />
          )}
          <AppImage
            appUrl={routes.fakeLottery}
            text="Let's prank by lottery"
            imageUrl={appImage.fakeLottery}
          />
        </Apps>
      </Main>
      <Footer>
        <span style={{ marginBottom: 20 }}>Contact: info@jiunstudio.com</span>
        <span>&copy; {new Date().getFullYear()} JIUN STUDIO</span>
      </Footer>
    </Container>
  );
};

export default Home;
