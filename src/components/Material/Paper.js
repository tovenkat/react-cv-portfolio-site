import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 2),
    color:'white',
    backgroundColor:'black'
  },
}));

export default function PaperSheet(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h2">
          {props.title}
        </Typography>
        <Typography component="p">
          {props.children}
        </Typography>
      </Paper>
    </div>
  );
}
