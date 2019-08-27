import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonsGroup from "../UI/ButtonsGroup";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    color: "white",
    backgroundColor: "#3f51b5",
    boxShadow: "1px -2px 2px 0px #d0bebe"
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "1rem"
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.wrapper}>
      <div className={classes.buttons}>
        <ButtonsGroup color="white" />
      </div>
      <p>© Copyright 2019. Alex Loian</p>
    </footer>
  );
};

export default Footer;
