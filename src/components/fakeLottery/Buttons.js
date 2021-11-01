import styled from "styled-components";
import { useHistory } from "react-router-dom";
import routes from "../../routes";

const Container = styled.div`
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
  display: flex;
  justify-content: ${(props) => (props.next ? "space-between" : "center")};
  button {
    padding: 8px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    color: black;
  }
`;

const Back = styled.button`
  background-color: tomato;
`;
const Next = styled.button`
  background-color: skyblue;
`;

const Buttons = ({ home = false, go, next = false }) => {
  const history = useHistory();

  return (
    <Container next={next}>
      <Back
        onClick={() => (home ? history.push(routes.home) : history.goBack())}
      >
        Back
      </Back>
      {next && <Next onClick={() => history.push(go)}>Next</Next>}
    </Container>
  );
};

export default Buttons;
