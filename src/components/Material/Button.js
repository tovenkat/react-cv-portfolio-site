import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function OutlinedButtons(props) {
  const classes = useStyles();

  return (

    
      <Button variant="outlined" size="large" color='primary' href={props.href} className={classes.button}>
        {props.value}
      </Button>
  );
}

export default OutlinedButtons;
