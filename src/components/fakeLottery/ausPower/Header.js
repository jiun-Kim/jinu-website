import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 75px;
  background-color: white;
  display: flex;
  align-items: center;
`;

const InnerHeader = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.div`
  width: 169px;
  height: 40px;
  background-image: url("../auspowerlogo.svg");
  background-size: cover;
`;
const RightHeaderBox = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoginBox = styled.div`
  width: 105px;
  height: 34px;
  padding: 0 15px;
  border-radius: 22px;
  margin-right: 32px;
  background-color: ${(props) => props.theme.lightPurple};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: bold;
`;

const Icon = styled.div``;

const CartIcon = styled.div`
  color: ${(props) => props.theme.lightPurple};
  font-size: 25px;
`;

const Header = () => {
  return (
    <Container>
      <InnerHeader>
        <Image />
        <RightHeaderBox>
          <LoginBox>
            <Icon>
              <FontAwesomeIcon icon={faUser} />
            </Icon>
            Log in
          </LoginBox>
          <CartIcon>
            <FontAwesomeIcon icon={faShoppingCart} />
          </CartIcon>
        </RightHeaderBox>
      </InnerHeader>
    </Container>
  );
};

export default Header;
