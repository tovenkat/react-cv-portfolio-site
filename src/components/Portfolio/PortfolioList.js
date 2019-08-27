import React, { useContext } from "react";
import { Context } from "../../Context";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import PortfolioCard from "../UI/PortfolioCard";

const theme = makeStyles({
  wrapper: {
    width: "100%",
    marginTop: "0px",
    margin: "auto",
    boxSizing: "border-box",
    textAlign: "center"
  },
  container: {
    backgroundColor: "white",
    margin: "auto"
  }
});

const PortfolioList = props => {
  const classes = theme();
  const [lang] = useContext(Context);

  let data = props.items.en;
  if (lang === "ru") {
    data = props.items.ru;
  }

  return (
    <div className={classes.wrapper}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.container}
      >
        {data.map((item, key) => {
          return (
            <Grid key={key} item xs={10} sm={11} md={5} lg={4}>
              <PortfolioCard item={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default PortfolioList;
