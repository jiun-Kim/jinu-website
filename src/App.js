import { GlobalStyle } from "./components/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./screen/Home";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import FakeLottery from "./screen/FakeLottery/FakeLottery";
import AusPower from "./screen/FakeLottery/AusPower";
import Fin from "./components/fakeLottery/Fin";
function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/fakelottery">
                <FakeLottery />
              </Route>
              <Route exact path="/fakelottery/australia">
                <AusPower />
              </Route>
              <Route exact path="/fakelottery/fin">
                <Fin />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
