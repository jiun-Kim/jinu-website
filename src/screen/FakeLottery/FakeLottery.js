import styled from "styled-components";
import Buttons from "../../components/fakeLottery/Buttons";
import routes from "../../routes";
import { HelmetTitle } from "../../share";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Policy = styled.p`
  text-align: start;
  line-height: 1.2;
  font-size: 18px;
  font-weight: bold;
`;

const FakeLottery = () => {
  return (
    <Container>
      <HelmetTitle title="FAKE LOTTERY" />
      <Form>
        <Policy>
          You can be punished for using this site to gain profits or engage in
          illegal activities by deceiving others. This site should only be used
          for fun purposes and cannot be used for other purposes. The service is
          only available if you agree.
        </Policy>
        <Buttons home={true} go={routes.fakeLotteryCountry} next={true} />
      </Form>
    </Container>
  );
};

export default FakeLottery;
