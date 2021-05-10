import { GlobalStyle } from "./components/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screen/Home";
import Service from "./screen/Searvice";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
          </Switch>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
