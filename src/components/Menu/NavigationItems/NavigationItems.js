import React, { useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import { Context } from "../../../Context";
import {
  enable as enableDarkMode,
  disable as disableDarkMode
} from "darkreader";

const darkModeHandler = value => {
  if (value) {
    enableDarkMode({ brightness: 100, contrast: 90, sepia: 10 });
  }
  if (!value) {
    disableDarkMode();
  }
};

const NavigationItems = props => {
  const [darkMode, setDarkMode] = React.useState(true);

  const [language, setLanguage] = useContext(Context);

  useEffect(() => {
    darkModeHandler(darkMode);
  }, [darkMode]);

  const linksStyle = {
    textDecoration: "none",
    color: props.color,
    padding: "0 1rem"
  };
  const drawerLinks = [
    { label: language === "en" ? "Home" : "Главная", to: "/" },
    {
      label: language === "en" ? "Сareer" : "Опыт Работы",
      to: "/experience"
    },
    {
      label: language === "en" ? "Portfolio" : "Примеры Работ",
      to: "/portfolio"
    }
  ];

  const links = (
    <div
      style={{ display: "flex", flexDirection: props.row }}
      role="presentation"
      onClick={props.menuOpenHandler(false)}
      onKeyDown={props.menuOpenHandler(false)}
    >
      {drawerLinks.map((text, index) => (
        <Button key={index} color="inherit">
          <Link style={linksStyle} to={text.to}>
            {text.label}
          </Link>
        </Button>
      ))}
      <Button style={linksStyle} color="inherit" onClick={props.about}>
        {language === "en" ? "Contact" : "Связаться"}
      </Button>
      <FormControlLabel
        control={
          <Switch
            checked={language === "en"}
            onChange={() => {
              setLanguage(language === "en" ? "ru" : "en");
            }}
            value={language}
          />
        }
        label={language === "en" ? "EN" : "РУС"}
        style={linksStyle}
      />
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            value={darkMode}
          />
        }
        label={darkMode ? "Dark Enabled" : "Light Mode"}
        style={linksStyle}
      />
    </div>
  );
  return links;
};

export default NavigationItems;
