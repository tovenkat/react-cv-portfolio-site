import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { ContextProvider } from "./Context";

import ReactGA from "react-ga";

import Experience from "./components/Experience/Experience";
import MainPage from "./components/MainPage/MainPage";
import Menu from "./components/Menu/Menu";

import Footer from "./components/Footer/Footer";

ReactGA.initialize("UA-136820605-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/experience" component={Experience} />
          {/* <Route path="/portfolio" exact component={Portfolio} /> */}

          {/* <Redirect to="/" /> */}
        </Switch>
      </BrowserRouter>
      <Footer />
    </ContextProvider>
  );
};

export default App;
