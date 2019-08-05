import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = props => {
  const [lang, setLang] = useState("en");
  const [about, setAbout] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <Context.Provider value={[lang, setLang, about, setAbout, menu, setMenu]}>
      {props.children}
    </Context.Provider>
  );
};
