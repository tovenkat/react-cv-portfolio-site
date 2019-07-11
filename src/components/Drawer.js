import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {NavLink} from 'react-router-dom';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import BuildIcon from '@material-ui/icons/Build';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});


export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const LinksList = [{
    to:'/',
    icon:<InboxIcon/>,
    title:'Home'
  },
  {
    to:'/about',
    divider:<Divider/>,
    icon:<BuildIcon/>,
    title:'About Me'
  },
  {
    to:'/experience',
    icon:<InboxIcon/>,
    title:'Experience'
  },
  {
    to:'/portfolio',
    icon:<WorkIcon/>,
    title:'Portfolio'
  },
  {
    to:'/pet',
    divider:<Divider/>,
    icon:<WorkIcon/>,
    title:'PET Projects'
  }];


  // {
  //   to:'/blog',
  //   icon:<BuildIcon/>,
  //   title:'Blog'
  // },
  // {
  //   to:'/estimate',
  //   icon:<BuildIcon/>,
  //   divider:<Divider/>,
  //   title:'Estimate Site'
  // }


  const WrapperLinks=(LinksList.map((link)=>(
    <List key={link.to}>
      <NavLink style={{textDecoration:'none', color:'black'}} to={link.to} >
            <ListItem button key="ss">
              <ListItemIcon>{link.icon}</ListItemIcon>
            {link.title}
            </ListItem>
      </NavLink>
      {link.divider}
    </List>
  )));

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {WrapperLinks}
    
      
      <button onClick={props.changeLanguage}>Change Language</button>
    </div>
  );


  return (
    <div style={{
        position: 'fixed',
        top: '15px',
        left:'15px',
        zIndex:100
        }}>
      <Button onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>

    </div>
  );
}
