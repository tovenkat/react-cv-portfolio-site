import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


import Pet from './PetProject/PetProject';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Details from './Details/Details';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 4,
    backgroundColor: theme.palette.background.paper,
  },
}));

function NavTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="Portfolio" href="/drafts" />
          
          <LinkTab label="Pet Projects" href="/spam" />
          <LinkTab label="Skills" href="/trash" />
          <LinkTab label="Details" href="/spam" />
        </Tabs>
      </AppBar>
      {value === 0 && <Portfolio/>}
      {value === 1 && <Pet/>}
      {value === 2 && <Skills/>}
      {value === 3 && <Details/>}
    </div>
  );
}

export default NavTabs;
