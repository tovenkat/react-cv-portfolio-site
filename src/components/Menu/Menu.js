import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import logo from "../../assets/images/alex-loian-logo.png";

import { Context } from "../../Context";

import Hidden from "@material-ui/core/Hidden";
import NavigationItems from "./NavigationItems/NavigationItems";

import Slide from "@material-ui/core/Slide";

import { Link } from "react-router-dom";
import About from "./About/About";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  drawer: {
    backgroundColor: "#3f51b5"
  },
  mobile: {
    display: "flex",
    justifyContent: "space-between"
  },
  links: {
    textDecoration: "none",
    color: "black"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MenuMain(props) {
  // aasssas
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  //ssddsdsds
  const classes = useStyles();

  const [language, setLanguage, about, setAbout, menu, setMenu] = useContext(
    Context
  );

  const aboutOpen = () => {
    setAbout(true);
  };
  const aboutClose = () => {
    setAbout(false);
  };

  const menuOpenHandler = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenu(open);
  };

  const mobileView = (
    <Hidden mdUp className={classes.mobile}>
      {/* Part Of MobileView */}
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Link to="/">
        <img
          style={{ margin: "10px 0px" }}
          src={logo}
          height="60px"
          alt="Alex Loian Logo Front-End"
        />
      </Link>
    </Hidden>
  );
  const desktopView = (
    <Hidden smDown>
      {/* Part of DesktopView */}
      <Link to="/">
        <img
          style={{ margin: "0 20px" }}
          src={logo}
          height="60px"
          alt="Alex Loian Logo Front-End"
        />
      </Link>
      <Typography variant="h6" className={classes.title}>
        {language === "en" ? "Front-End Developer" : "Фронт-енд Разработчик"}
      </Typography>

      <NavigationItems
        changeLanguage={props.changeLanguage}
        menuOpenHandler={menuOpenHandler}
        row="row"
        about={aboutOpen}
      />
    </Hidden>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {mobileView}
          {desktopView}
        </Toolbar>
      </AppBar>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className={classes.links}>
          <Link to="/" className={classes.links}>
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/portfolio" className={classes.links}>
            Portfolio
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/experience" className={classes.links}>
            Experience
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span onClick={aboutOpen} className={classes.links}>
            About
          </span>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            setLanguage(language === "en" ? "ru" : "en");
          }}
        >
          ChangeLanguage
        </MenuItem>
      </Menu>

      {/* <Drawer
        className={classes.drawer}
        open={menu}
        onClose={menuOpenHandler(false)}
      >
        <NavigationItems
          row="column"
          color
          changeLanguage={props.changeLanguage}
          menuOpenHandler={menuOpenHandler}
        />
      </Drawer> */}

      <About open={about} Transition={Transition} aboutClose={aboutClose} />
    </div>
  );
}
