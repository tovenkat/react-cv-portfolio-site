import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";



const NavigationItems = props => {
  const [lang, setLang] = useState(true);

  const drawerLinks = [
    { label: lang?"Home":'Главная', to: "/" },
    { label: lang?"Experience":'Опыт Работы', to: "/experience" },
    { label: lang?"Portfolio":'Примеры Работ', to: "/portfolio" }
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
              color: "white",
              padding: "20px"
            }}
            to={text.to}
          >
            {text.label}
          </Link>
        </Button>
      ))}
      <Button color="inherit" onClick={props.about}>
        {lang?"About":'Связаться'}
      </Button>
      <FormControlLabel
        control={
          <Switch
            checked={lang}
            onChange={() => {
              setLang(!lang);
              props.changeLanguage();
            }}
            value={lang ? "EN" : "РУС"}
          />
        }
        label={lang ? "EN" : "РУС"}
        style={{margin:'15px'}}
      />
    </div>
  );
  return <>{items}</>;
};

export default NavigationItems;
