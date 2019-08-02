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


import Hidden from '@material-ui/core/Hidden';
import NavigationItems from './NavigationItems/NavigationItems';


import Slide from "@material-ui/core/Slide";



import { Link } from "react-router-dom";
import About from "./About/About";



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
  drawer:{
    backgroundColor:'#3f51b5'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Menu(props) {
  const classes = useStyles();

  const [menu, setMenu] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const aboutOpen=()=> {
    setOpen(true);
  }
  const aboutClose=()=> {
    setOpen(false);
  }

  const menuOpenHandler = (open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenu(open);
  };

  



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Hidden mdUp>
            {/* Part Of MobileView */}
            <IconButton
              onClick={menuOpenHandler(true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          
          <Hidden smDown>
            {/* Part of DesktopView */}
            <Typography variant="h6" className={classes.title}>{props.language==='en'?'Alex Loian Front-End React Developer':'Разработчик'}</Typography>
            
            <NavigationItems changeLanguage={props.changeLanguage} menuOpenHandler={menuOpenHandler} row='row' about={aboutOpen}/>

          </Hidden>
        </Toolbar>
      </AppBar>

      {/* Боковое Меню */}
      <Drawer className={classes.drawer} open={menu} onClose={menuOpenHandler(false)}>
 
        <NavigationItems  row='column' changeLanguage={props.changeLanguage} menuOpenHandler={menuOpenHandler}/>
      </Drawer>

      <About open={open} Transition={Transition} aboutClose={aboutClose} />
    </div>
  );
}
