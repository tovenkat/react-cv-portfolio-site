import React from "react";
import Data from "./ReccommendationsData";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Carousel from "nuka-carousel";

import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FaLinkedin } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  bigAvatar: {
    margin: "15px auto",
    width: 180,
    height: 180
  },
  card: {
    maxWidth: 500,
    margin: "auto",
    marginBottom: "40px"
  },
  wrapper: {
    margin: "10px"
  }
});

const Recommendations = () => {
  const classes = useStyles();
  const list = Data.map(item => {
    return (
      // <Grid container direction="row" justify="center" alignItems="center">
      //   <Grid item xs={12} sm={12} md={6} lg={3}>
      <div className={classes.wrapper}>
        <Card className={classes.card}>
          <Avatar
            alt={item.name}
            src={item.img}
            className={classes.bigAvatar}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {item.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {item.major}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {item.type}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.body}
            </Typography>
          </CardContent>

          <CardActions>
            <IconButton
              size="medium"
              color="primary"
              title="LinkedIn"
              href={item.linkedIn}
            >
              <FaLinkedin />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  });

  return (
    <Carousel
      autoplay
      withoutControls
      autoplayInterval={2200}
      cellAlign="center"
      wrapAround
    >
      {list}
    </Carousel>
  );
};

export default Recommendations;
