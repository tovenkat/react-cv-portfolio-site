import React from "react";
import Grid from "@material-ui/core/Grid";
import { items } from "./PortfolioData";

import PortfolioItem from "./PortfolioItem/PortfolioItem";

const theme = {
  backgroundColor: "white"
};
const mainStyle = {
  width: "100%",
  marginTop: "0px",
  boxSizing: "border-box",
  textAlign: "center"
};

const Portfolio = props => {
  const reactItems = (
    <Grid
      container
      spacing={1}
      alignItems="center"
      style={theme}
      justify="center"
    >
      {items.en.map(item => {
        return (
          <Grid item xs={10} sm={10} md={4} lg={4}>
            <PortfolioItem item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
  const wordpressItems = (
    <Grid
      container
      spacing={1}
      alignItems="center"
      style={theme}
      justify="center"
    >
      {items.en.map(item => {
        return (
          <Grid item xs={10} sm={10} md={4} lg={4}>
            <PortfolioItem item={item} />
          </Grid>
        );
      })}
    </Grid>
  );

  return (
    <div style={mainStyle}>
      <h1
        style={{
          backgroundColor: "white",
          padding: "30px",
          color: "black"
        }}
      >
        React Projects
      </h1>
      {reactItems}
      <h1
        style={{
          backgroundColor: "white",
          padding: "30px",
          color: "black"
        }}
      >
        Wordpress Projects
      </h1>
    </div>
  );
};

export default Portfolio;
