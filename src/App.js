import { GlobalStyle } from "./components/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./screen/Home";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
