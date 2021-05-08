import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 3%;
  div {
    img {
      width: calc(7vw + 20px);
      transition: 0.1s linear;
      &:hover {
        width: calc(7.5vw + 20px);
      }
    }
    span {
      font-size: calc(1vw + 8px);
      transition: 0.1s linear;
      &:hover {
        font-size: calc(1.1vw + 12px);
      }
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
