import { GlobalStyle } from "./components/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./screen/Home";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Fin from "./components/fakeLottery/Fin";
import routes from "./routes";
import FakeLottery from "./screen/FakeLottery/FakeLottery";
import SelectTicket from "./screen/FakeLottery/SelectTicket";
import SelectCountry from "./screen/FakeLottery/SelectCountry";
import SelectAmount from "./screen/FakeLottery/SelectAmount";
import AusLottery from "./screen/FakeLottery/AusLottery";
import Privacy from "./screen/Privacy";
function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Switch>
              <Route exact path={routes.home}>
                <Home />
              </Route>
              <Route exact path={routes.fakeLottery}>
                <FakeLottery />
              </Route>
              <Route exact path={routes.fakeLotteryCountry}>
                <SelectCountry />
              </Route>
              <Route exact path={routes.fakeLotteryTicket}>
                <SelectTicket />
              </Route>
              <Route exact path={routes.fakeLotteryAmount}>
                <SelectAmount />
              </Route>
              <Route exact path={routes.fakeLotteryAus}>
                <AusLottery />
              </Route>
              <Route exact path={routes.fakeLotteryFin}>
                <Fin />
              </Route>
              <Route exact path={routes.privacy}>
                <Privacy />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
