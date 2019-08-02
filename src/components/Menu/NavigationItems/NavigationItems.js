import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { Link } from "react-router-dom";

import NavigationItem from "./NavigationItem/NavigationItem";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const NavigationItems = props => {
  const [lang, setLang] = useState(true);
  const classes = useStyles();
  const drawerLinks = [
    { label: "Home", to: "/" },
    { label: "Experience", to: "/experience" },
    { label: "Portfolio", to: "/portfolio" }
  ];

  const items = (
    <div
      style={{ display: "flex", flexDirection: props.row }}
      role="presentation"
      onClick={props.menuOpenHandler(false)}
      onKeyDown={props.menuOpenHandler(false)}
    >
      {drawerLinks.map((text, index) => (
        <Button color="inherit">
          <Link
            key={index}
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
        About
      </Button>
      <FormControlLabel
        control={
          <Switch
            checked={lang}
            onChange={() => {
              setLang(!lang);
              props.changeLanguage();
            }}
            value={lang ? "EN" : "RU"}
          />
        }
        label={lang ? "EN" : "RU"}
        style={{margin:'15px'}}
      />
    </div>
  );
  return <>{items}</>;
};

export default NavigationItems;
