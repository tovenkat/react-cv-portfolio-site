import React, { useContext } from "react";
import { Context } from "../../Context";
import { makeStyles } from "@material-ui/core/styles";
import ButtonsGroup from "../UI/ButtonsGroup";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    color: "#ffc107",
    backgroundColor: "#3f3d56",
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
  const [, , darkMode] = useContext(Context);
  const classes = useStyles();
  return (
    <footer
      style={{ backgroundColor: darkMode ? "black" : "" }}
      className={classes.wrapper}
    >
      <div className={classes.buttons}>
        <ButtonsGroup color="#ffc107" />
      </div>
      <p>© Copyright 2019. Alex Loian</p>
    </footer>
  );
};

export default Footer;
