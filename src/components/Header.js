import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100px;
  grid-gap: 5px;
  text-align: center;
  div {
    width: 100%;
    img {
      width: calc(7vw + 16px);
    }
    span {
      font-size: calc(1vw + 10px);
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <div>
        <a href="/">
          <img src="JINU-BLACK.svg" />
        </a>
      </div>
      <div>
        <a href="https://netplix.netlify.app/">
          <span>MOVIES STUDIO</span>
        </a>
      </div>
      <div>
        <a href="/service">
          <img src="costrop.svg" />
        </a>
      </div>
      <div>
        <a href="https://photostar.netlify.app">
          <span>PHOTO STAR</span>
        </a>
      </div>
    </Container>
  );
};

export default Header;
