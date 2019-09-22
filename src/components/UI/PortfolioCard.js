import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";

import { FaGithub, FaPlay } from "react-icons/fa";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 550,
    width: "95%",
    margin: "auto",
    boxSizing: "border-box",
    marginBottom: "15px"
  },
  chip: {
    margin: theme.spacing(1)
  },
  media: {
    height: 0,
    paddingTop: "69.25%" // 16:9
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

      <CardActions>
        <IconButton aria-label="Demo App" href={props.item.demoLink}>
          <FaPlay />
        </IconButton>
        <IconButton aria-label="Source Code" href={props.item.gitHubLink}>
          <FaGithub />
        </IconButton>
        {props.item.skills.map((element, key) => {
          return (
            <Chip
              key={key}
              color="secondary"
              label={element}
              className={classes.chip}
            />
          );
        })}
      </CardActions>
    </Card>
  );
}
