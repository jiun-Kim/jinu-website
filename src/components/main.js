import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 2% 0 2%;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.div`
  height: 33%;
`;

const ContentsText = styled.span`
  opacity: ${(props) => (props.scroll ? 1 : 0)};
  transition: opacity 2s linear;
`;
const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 5px;
  font-weight: 100;
  height: 33%;
  margin-top: 5px;
  opacity: ${(props) => (props.scroll ? 1 : 0)};
  transition: opacity 1.5s linear;
`;
const SiteBox = styled.div`
  border: 2px solid white;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 10%;
  span {
    font-size: calc(0.4vw + 14px);
    text-align: center;
    margin-top: 5%;
  }
  img {
    width: 100%;
  }
  transition: border 0.2s linear;
  &:hover {
    border: 10px solid #f39c12;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border: 3px solid white;
  border-radius: 50px;
  margin-top: 15%;
  &:hover {
    border-color: #f39c12;
  }
`;
const Footer = styled.div`
  height: 33%;
`;

const Main = () => {
  const [scroll, setScroll] = useState(false);
  const getEvent = () => {
    const scrollLocation = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    if (windowHeight * 1.5 < scrollLocation) {
      return setScroll(true);
    } else {
      return setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", getEvent);
  }, [scroll]);
  return (
    <Container>
      <Header />
      <ContentsText scroll={scroll}>
        Click on the box to visit the website.
      </ContentsText>
      <Contents scroll={scroll}>
        <a href="/service">
          <SiteBox>
            <img style={{ width: "70%" }} src="costrop.svg" />
            <span>Online Shopping mall</span>
            <a href="#">
              <IconBox>
                <FontAwesomeIcon icon={faGithub} />
              </IconBox>
            </a>
          </SiteBox>
        </a>

        <a href="https://netplix.netlify.app" target="_blink">
          <SiteBox>
            <img src="netplix.svg" />
            <span>Netflix site cloning site Movie and TV list service</span>
            <a href="https://github.com/jiun-Kim/netplix" target="_blink">
              <IconBox>
                <FontAwesomeIcon icon={faGithub} />
              </IconBox>
            </a>
          </SiteBox>
        </a>

        <a href="https://photostar.netlify.app" target="_blink">
          <SiteBox>
            <img style={{ width: "35%" }} src="insta.svg" />
            <span>Instagram cloning... but still building this</span>
            <a
              href="https://github.com/jiun-Kim/instaclone-web"
              target="_blink"
            >
              <IconBox>
                <FontAwesomeIcon icon={faGithub} />
              </IconBox>
            </a>
          </SiteBox>
        </a>
      </Contents>
      <Footer />
    </Container>
  );
};

export default Main;
