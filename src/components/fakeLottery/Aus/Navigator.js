import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  ul {
    display: flex;
    font-size: 18px;
    font-weight: bold;
    padding: 15px;
    margin: 0 25px;
    li {
      margin-right: calc(4vw + 20px);
    }
  }
`;

const Navigator = ({ isMobile }) => (
  <Container>
    <ul>
      <li>
        <span>Play</span>
      </li>
      <li>
        <span>Results</span>
      </li>
      <li>
        <span>{isMobile ? "Winners" : "Real Winners"}</span>
      </li>
      <li>
        <span>More</span>
      </li>
    </ul>
  </Container>
);

export default Navigator;
