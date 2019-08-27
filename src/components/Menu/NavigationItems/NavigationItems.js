import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import { Context } from "../../../Context";

const NavigationItems = props => {
  const [language, setLanguage] = useContext(Context);

  const linksStyle = {
    textDecoration: "none",
    color: props.color,
    paddingLeft: "1.25rem"
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
    </div>
  );
  return links;
};

export default NavigationItems;
