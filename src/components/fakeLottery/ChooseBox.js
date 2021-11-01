import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChooseBox = ({ children }) => <Box>{children}</Box>;

export default ChooseBox;
