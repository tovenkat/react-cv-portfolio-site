import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import { Context } from "../../../Context";

const NavigationItems = props => {
  const [language, setLanguage] = useContext(Context);

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

  const items = (
    <div
      style={{ display: "flex", flexDirection: props.row }}
      role="presentation"
      onClick={props.menuOpenHandler(false)}
      onKeyDown={props.menuOpenHandler(false)}
    >
      {drawerLinks.map((text, index) => (
        <Button key={index} color="inherit">
          <Link
            style={{
              textDecoration: "none",
              color: props.color ? "black" : "white",
              padding: "20px"
            }}
            to={text.to}
          >
            {text.label}
          </Link>
        </Button>
      ))}

      <Button style={{ padding: "25px" }} color="inherit" onClick={props.about}>
        {language === "en" ? "Contact" : "Связаться"}
      </Button>

      <FormControlLabel
        control={
          <Switch
            checked={language === "en"}
            onChange={() => {
              setLanguage(language === "en" ? "ru" : "en");
            }}
            value={language === "en" ? "EN" : "РУС"}
          />
        }
        label={language === "en" ? "EN" : "РУС"}
        style={{ margin: "15px" }}
      />
    </div>
  );
  return <>{items}</>;
};

export default NavigationItems;
