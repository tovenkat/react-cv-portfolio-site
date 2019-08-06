import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { items } from "./PortfolioData";
import { Context } from "../../Context";

import PortfolioItem from "./PortfolioItem/PortfolioItem";

const theme = {
  backgroundColor: "white",
  margin: "auto"
};
const mainStyle = {
  width: "100%",
  marginTop: "0px",
  margin: "auto",
  boxSizing: "border-box",
  textAlign: "center"
};

const Portfolio = props => {
  const [lang] = useContext(Context);

  let data = items.en;
  if (lang === "ru") {
    data = items.ru;
  }

  const reactItems = (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      style={theme}
    >
      {data.map((item, key) => {
        return (
          <Grid key={key} item xs={10} sm={11} md={5} lg={4}>
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
      {items.en.map((item, key) => {
        return (
          <Grid key={key} item xs={10} sm={10} md={4} lg={4}>
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
        {lang === "en" ? "React Projects" : "Реакт Проэкты"}
      </h1>
      {reactItems}
      <h1
        style={{
          backgroundColor: "white",
          padding: "30px",
          color: "black"
        }}
      >
        JavaScript
      </h1>

      <h1
        style={{
          backgroundColor: "white",
          padding: "30px",
          color: "black"
        }}
      >
        {lang === "en" ? "Wordpress Projects" : "Вордпресс Проэкты"}
      </h1>
    </div>
  );
};

export default Portfolio;
