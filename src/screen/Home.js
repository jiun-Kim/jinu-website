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
  const [visibleBox, setVisibleBox] = useState(0);
  return (
    <Container>
      <HelmetTitle title="We make your idea a reality." />
      <Header />
      <Main>
        <Title>Web</Title>
        <Apps>
          <AppImage
            appUrl="https://goodideapainting.com.au"
            text="Painting web site"
            imageUrl={appImage.goodideapainting}
          />
          <AppImage
            appUrl="https://mareeba.app"
            text="Hoju No.1 community market Mareeba web site"
            imageUrl={appImage.mareeba}
          />
          <AppImage
            appUrl={appUrl.watcha}
            text="This app is the Netflix cloning app"
            imageUrl={appImage.watcha}
          />
          <AppImage
            appUrl={routes.fakeLottery}
            text="Let's prank by lottery"
            imageUrl={appImage.fakeLottery}
          />

          <AppImage
            appUrl="http://neost.com.au"
            text="Web & app hosting business"
            imageUrl={appImage.neost}
          />
        </Apps>
      </Main>
      <Main>
        <Title>App</Title>
        <Apps>
          {visibleBox === 1 ? (
            <ChoiceBox
              ios={appUrl.colorselectorIos}
              android={appUrl.colorselectorAndroid}
            />
          ) : (
            <AppImage
              text="Color selector app for ios & android"
              imageUrl={appImage.colorselector}
              visibleBox={true}
              onClick={() => setVisibleBox(1)}
            />
          )}
          {visibleBox === 2 ? (
            <ChoiceBox
              ios={appUrl.colorselectorIos}
              android={appUrl.inAndOutAndroid}
            />
          ) : (
            <AppImage
              text="In & Out app for ios & android"
              imageUrl={appImage.inAndOut}
              visibleBox={true}
              onClick={() => setVisibleBox(2)}
            />
          )}
          {visibleBox === 3 ? (
            <ChoiceBox
              ios={appUrl.colorselectorIos}
              android={appUrl.luckyGenAndroid}
            />
          ) : (
            <AppImage
              text="Luck Gen app for ios & android"
              imageUrl={appImage.luckyGen}
              visibleBox={true}
              onClick={() => setVisibleBox(3)}
            />
          )}
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
