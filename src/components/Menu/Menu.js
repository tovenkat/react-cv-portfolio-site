import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MailIcon from "@material-ui/icons/Mail";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import { Link } from "react-router-dom";

import cv from "../../assets/images/CV-Alex-Loian-Front-End-Developer-React-Resume.pdf";
const drawerLinks = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Portfolio", to: "/portfolio" }
];

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Menu(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false
  });

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {drawerLinks.map((text, index) => (
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              flexDirection: "row",
              padding: "20px"
            }}
            to={text.to}
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            {text.label}
          </Link>
        ))}
      </List>

      <Button
        variant="contained"
        color="primary"
        onClick={props.changeLanguage}
      >
        Change Language
      </Button>
    </div>
  );

  const dialog = (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {"Looking for React Front-End position"}
      </DialogTitle>
      <DialogContent>
      
        <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "10px auto"
          }}
        >
          <Button
            variant="contained"
            color="primary"
            href="https://github.com/AlexLDP"
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="https://www.linkedin.com/in/alex-loian-82828284"
          >
            Linked In
          </Button>
          <Button
            variant="contained"
            color="primary"
            download="Alex-Loian-CV-React-Developer"
            href={cv}
          >
            CV
          </Button>
          <Button variant="contained" color="primary" href="tel:0980506389">
            Call
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="mailto:wisehelper@gmail.com"
          >
            Email
          </Button>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={toggleDrawer("left", true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} />
          <Button color="inherit" onClick={handleClickOpen}>
            About
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
      {dialog}
    </div>
  );
}
