import styled from "styled-components";
import { appImage, appUrl } from "../apps";
import App from "../components/App";
import Header from "../components/Header";

const Container = styled.div`
  height: 70vh;
`;

const Main = styled.main`
  padding: 30px;
  height: 100%;
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
  height: 100px;
  background-color: ${(props) => props.theme.mainColor};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
`;

export default () => (
  <Container>
    <Header />
    <Main>
      <Title>New Release</Title>
      <Apps>
        <App
          appUrl={appUrl.watcha}
          text="This app is the Netflix cloning app"
          imageUrl={appImage.watcha}
        />
        <App
          appUrl={appUrl.colorselector}
          text="Color selector app for ios & android & web"
          imageUrl={appImage.colorselector}
        />
      </Apps>
    </Main>
    <Footer>
      <span style={{ marginBottom: 20 }}>Contact: info@jiunstudio.com</span>
      <span>&copy; {new Date().getFullYear()} JIUN STUDIO</span>
    </Footer>
  </Container>
);
