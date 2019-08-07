import React from "react";
import Data from "./ReccommendationsData";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
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
    maxWidth: 400,

    margin: "15px auto"
  }
});

const Recommendations = () => {
  const classes = useStyles();
  const list = Data.map(item => {
    return (
      <Grid item xs={12} sm={12} md={6} lg={3}>
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
              size="large"
              color="primary"
              title="LinkedIn"
              href={item.linkedIn}
            >
              <FaLinkedin />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {list}
    </Grid>
  );
};

export default Recommendations;
