import { HelmetTitle } from "../share";
import FirstHome from "../components/firstHome";
import SecondHome from "../components/secondHome";
import Main from "../components/main";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <HelmetTitle title="HOME" />
      <FirstHome />
      <SecondHome />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
