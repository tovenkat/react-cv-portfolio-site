import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { ContextProvider } from "./Context";

import ReactGA from "react-ga";

import Experience from "./components/Experience/Experience";
import MainPage from "./components/MainPage/MainPage";
import Menu from "./components/Menu/Menu";
import Portfolio from "./components/Portfolio/Portfolio";

ReactGA.initialize("UA-134625728-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/experience" component={Experience} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
