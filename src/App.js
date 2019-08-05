import React, { useState } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { ContextProvider } from "./Context";

import ReactGA from "react-ga";

import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import MainPage from "./components/MainPage/MainPage";
import Menu from "./components/Menu/Menu";

ReactGA.initialize("UA-134625728-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  const [lang, setLang] = useState("en");

  const changeLanguageHandler = () => {
    setLang(lang === "en" ? "ru" : "en");
  };

  return (
    <ContextProvider>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" exact render={() => <MainPage language={lang} />} />
          <Route
            path="/experience"
            render={() => <Experience language={lang} />}
          />
          <Route
            path="/portfolio"
            render={() => <Portfolio language={lang} />}
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
