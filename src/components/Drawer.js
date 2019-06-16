import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';


import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import BuildIcon from '@material-ui/icons/Build';
import WorkIcon from '@material-ui/icons/Work';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


export default function TemporaryDrawer() {
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

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {[<a href='/'>Home</a>,<a href='/about'>About Me</a>, <a href='/experience'>Experience</a>].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
        
      </List>
      <Divider />
      <List>
        {[<a href='/portfolio'>Portfolio</a>, <a href='/pet'>PET Projects</a>].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><WorkIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem button key='Blog'>
            <ListItemIcon><BuildIcon/></ListItemIcon>
            <ListItemText primary= 'Blog' />
          </ListItem>
          <Divider />
        <ListItem button key='Estimate'>
            <ListItemIcon><BuildIcon/></ListItemIcon>
            <ListItemText primary='Estimate Site' />
        </ListItem>
        <ListItem button key='changeLanguage'>
            <ListItemIcon>
              <Switch checked='EN' value="EN" />
            </ListItemIcon>
            <ListItemText primary="Language" />
          </ListItem>
      </List>
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{
        position: 'fixed',
        top: 0,
        zIndex:100,
        }}>
      <Button onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>

    </div>
  );
}
