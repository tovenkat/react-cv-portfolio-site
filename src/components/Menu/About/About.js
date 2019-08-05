import React from "react";
import Avatar from "../../../assets/images/alex-loian-fron-end-developer-avatar.jpg";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import cv from "../../../assets/images/CV-Alex-Loian-Front-End-Developer-React-Resume.pdf";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 450,
    margin: "auto"
  },
  actionGroup: {
    display: "flex",
    justifyContent: "space-around"
  }
});
const About = props => {
  const classes = useStyles();

  const card = (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Alex Loian Front-End React Developer"
          height="450"
          image={Avatar}
          title="Alex Loian Front-End React Developer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Alex Loian
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Front-End React Deveper. React/JS/NodeJS
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actionGroup}>
        <Button
          size="small"
          color="primary"
          download="Alex-Loian-CV-React-Developer"
          href={cv}
        >
          CV
        </Button>
        <Button size="small" color="primary" href="https://github.com/AlexLDP">
          GitHub
        </Button>
        <Button
          size="small"
          color="primary"
          href="https://www.linkedin.com/in/alex-loian-82828284"
        >
          LinkedIN
        </Button>
      </CardActions>
      <CardActions className={classes.actionGroup}>
        <Button size="small" color="primary" href="tel:0980506389">
          Call
        </Button>
        <Button size="small" color="primary" href="mailto:wisehelper@gmail.com">
          Email
        </Button>
        <Button size="small" color="primary" onClick={props.aboutClose}>
          Close
        </Button>
      </CardActions>
    </Card>
  );

  const dialog = (
    <Dialog
      open={props.open}
      TransitionComponent={props.Transition}
      keepMounted
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      {card}
    </Dialog>
  );
  return dialog;
};

export default About;
