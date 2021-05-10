import styled from "styled-components";

const Container = styled.div`
  padding: 0 2% 0 2%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
`;

const Header = styled.div`
  height: 33%;
`;
const Main = styled.div`
  height: 33%;
`;
const FooterBox = styled.div`
  display: flex;
  align-items: flex-end;
  height: 33%;
  span {
    margin-bottom: 15%;
  }
`;

const Email = styled.span`
  color: #f39c12;
  cursor: pointer;
  ${document.execCommand("copy")}
`;

const Footer = () => {
  return (
    <Container>
      <Header></Header>
      <Main>
        <span>
          Contact Email :{" "}
          <Email onClick={() => alert("This email has been copied")}>
            lrnngman@gmail.com
          </Email>
        </span>
      </Main>
      <FooterBox>
        <span>&copy; 2021 JINU STUDIO</span>
      </FooterBox>
    </Container>
  );
};

export default Footer;
