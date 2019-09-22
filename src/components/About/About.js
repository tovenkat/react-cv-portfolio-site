import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { FaTimes } from "react-icons/fa";

import ButtonsGroup from "../UI/ButtonsGroup";

import Avatar from "../../assets/mainInfo/alex-loian-avatar.jpg";

const config = {
  name: "Alex Loian",
  subtitle: "Front-End React Developer.",
  body: "React, Web-Components, JS, CSS, HTML",
  img: Avatar,
  imgHeight: 400,
  colorIcons: "#3f51b5",
  background: "whitesmoke",
  textColor: "black"
};

const useStyles = makeStyles({
  card: {
    minHeight: "450px",
    maxWidth: 500,
    margin: "auto",
    backgroundColor: config.background,
    color: config.textColor,
    fontSize: "16px"
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
          alt={config.name + config.body}
          height={config.imgHeight}
          image={config.img}
          title={config.name}
        />
        <CardContent>
          <h2>{config.name}</h2>
          <p>{config.subtitle}</p>
          <p variant="body2" component="p">
            {config.body}
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actionGroup}>
        <ButtonsGroup color={config.colorIcons} />

        <IconButton
          title="Close"
          style={{ color: config.colorIcons }}
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
