import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/mainInfo/alex-loian-logo.png";
import { Context } from "../../Context";
import Hidden from "@material-ui/core/Hidden";
import NavigationItems from "./NavigationItems/NavigationItems";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import About from "../About/About";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const config = {
  backgroundColor: "#3f3d56",
  colorText: "whitesmoke"
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: config.colorText
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const classes = useStyles();

  const [language, setLanguage, darkMode, setDarkMode] = useContext(Context);

  const [modal, setModal] = useState(false);

  const aboutOpen = () => {
    setModal(true);
  };
  const aboutClose = () => {
    setModal(false);
  };

  const menuOpenHandler = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //setMenu(open);
  };

  const mobileView = (
    <Hidden mdUp className={classes.mobile}>
      {/* Part Of MobileView */}
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
        aria-checked="false"
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
      <Typography
        variant="h6"
        style={{ color: config.colorText }}
        className={classes.title}
      >
        {language === "en" ? "Front-End Developer" : "Фронт-енд Разработчик"}
      </Typography>

      <NavigationItems
        changeLanguage={props.changeLanguage}
        menuOpenHandler={menuOpenHandler}
        row="row"
        about={aboutOpen}
        color={config.colorText}
      />
    </Hidden>
  );

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: darkMode ? "black" : config.backgroundColor,
          transition: "all 1s ease 0s"
        }}
      >
        <Toolbar>
          {mobileView}
          {desktopView}
        </Toolbar>
      </AppBar>

      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/" className={classes.links}>
          <MenuItem onClick={handleClose} className={classes.links}>
            Home
          </MenuItem>
        </Link>
        <a href="/projects/index.html" className={classes.links}>
          <MenuItem onClick={handleClose}>Portfolio</MenuItem>
        </a>
        <Link to="/experience" className={classes.links}>
          <MenuItem onClick={handleClose}>Experience</MenuItem>
        </Link>
        <span onClick={aboutOpen} className={classes.links}>
          <MenuItem onClick={handleClose}>About</MenuItem>{" "}
        </span>
        <MenuItem
          onClick={() => {
            handleClose();
            setLanguage(language === "en" ? "ru" : "en");
          }}
        >
          ChangeLanguage
        </MenuItem>
        <MenuItem onClick={() => setDarkMode(!darkMode)}>Color Mode</MenuItem>
      </Menu>

      <About open={modal} Transition={Transition} aboutClose={aboutClose} />
    </div>
  );
}
