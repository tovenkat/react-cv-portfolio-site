import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { FaGithub, FaPlay } from "react-icons/fa";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    width: "98%",
    margin: "auto",
    boxSizing: "border-box"
  },
  chip: {
    margin: theme.spacing(1)
  },
  media: {
    height: 0,
    paddingTop: "60.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

export default function PortfolioItem(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader title={props.item.title} subheader={props.item.subTitle} />
      <CardMedia
        className={classes.media}
        image={props.item.img}
        title={props.item.title}
      />

      <CardActions disableSpacing>
        <IconButton aria-label="Demo App" href={props.item.demoLink}>
          <FaPlay />
        </IconButton>
        <IconButton aria-label="Source Code" href={props.item.gitHubLink}>
          <FaGithub />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {props.item.skills.map((element, key) => {
              return (
                <Chip
                  key={key}
                  avatar={FaPlay}
                  color="secondary"
                  label={element}
                  className={classes.chip}
                />
              );
            })}
          </Typography>
          <Typography paragraph>{props.item.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
