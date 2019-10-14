import React from "react";
import Avatar from "@material-ui/core/Avatar";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import styles from "./Reccommendations.module.css";

import { FaLinkedin } from "react-icons/fa";
import Data from "./ReccommendationsData";

const useStyles = makeStyles({
  bigAvatar: {
    margin: "15px auto",
    width: 180,
    height: 180
  },
  card: {
    maxWidth: 400,
    width: "95%",
    margin: "auto",
    marginBottom: "40px"
  },
  wrapper: {
    margin: "10px"
  }
});

const Recommendations = () => {
  const classes = useStyles();
  const listOfRecommendations = Data.map((item, index) => {
    return (
      // <Grid container direction="row" justify="center" alignItems="center">
      //   <Grid item xs={12} sm={12} md={6} lg={3}>
      <div className={classes.wrapper} key={index}>
        <Card className={classes.card}>
          <Avatar
            alt={item.name}
            src={item.img}
            className={classes.bigAvatar}
          />
          <CardContent>
            <h2>{item.name}</h2>
            <h4 style={{ color: "#afadad" }}>{item.major}</h4>
            <h4 style={{ color: "#afadad" }}>{item.type}</h4>
            <p style={{ fontSize: "0.9rem", lineHeight: "28px" }}>
              {item.body}
            </p>
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

  return <div className={styles.wrapper}>{listOfRecommendations}</div>;
};

export default Recommendations;
