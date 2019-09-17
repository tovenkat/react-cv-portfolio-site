import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = props => {
  const [lang, setLang] = useState("en");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Context.Provider value={[lang, setLang, darkMode, setDarkMode]}>
      {props.children}
    </Context.Provider>
  );
};
