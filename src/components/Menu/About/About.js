import React from "react";

import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTimes,
  FaPaperclip
} from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";

import cv from "../../../assets/images/main/CV-Alex-Loian-Front-End-Developer-React-Resume.pdf";
import Avatar from "../../../assets/images/main/alex-loian-fron-end-developer-avatar.jpg";

const useStyles = makeStyles({
  card: {
    minHeight: "450px",
    maxWidth: 400,
    margin: "auto"
  },
  actionGroup: {
    display: "flex",
    justifyContent: "space-between"
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
          height="400"
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
          title="CV Download"
          download="Alex-Loian-CV-React-Developer"
          href={cv}
        >
          CV
        </Button>
        <IconButton
          size="small"
          color="primary"
          label="GitHuB"
          title="GitHuB"
          href="https://github.com/AlexLDP"
        >
          <FaGithub />
        </IconButton>
        <IconButton
          size="small"
          color="primary"
          title="LinkedIn"
          href="https://www.linkedin.com/in/alex-loian-82828284"
        >
          <FaLinkedin />
        </IconButton>
        <IconButton
          title="Call Me"
          size="small"
          color="primary"
          href="tel:0980506389"
        >
          <FaPhone />
        </IconButton>
        <IconButton
          size="small"
          color="primary"
          title="Email Me"
          href="mailto:wisehelper@gmail.com"
        >
          <FaPaperclip />
        </IconButton>
        <IconButton
          title="Close"
          size="small"
          color="primary"
          onClick={() => props.aboutClose(false)}
        >
          <FaTimes />
        </IconButton>
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
