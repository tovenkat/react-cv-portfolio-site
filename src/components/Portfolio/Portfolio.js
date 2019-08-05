import React from "react";
import Card from "../Card";
import Grid from "@material-ui/core/Grid";
import Data from "./PortfolioData";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

const theme = {
  backgroundColor: "whitesmoke"
};
const mainStyle = {
  width: "100%",
  marginTop: "10px",
  boxSizing: "border-box",
  textAlign: "center"
};

const Portfolio = props => {
  let portfolioItems = Data.en.portfolio.map(item => {
    return (
      <Grid item xs={10} sm={10} md={6} lg={6} key={item.key}>
        <Card
          picture={item.picture}
          alt={item.title}
          title={item.title}
          body={item.body}
        />
      </Grid>
    );
  });
  let petItems = Data.en.pet.map(item => {
    return (
      <Grid item xs={10} sm={10} md={4} lg={4} key={item.key}>
        <Card
          picture={item.picture}
          alt={item.alt}
          title={item.title}
          href={item.href}
        />
      </Grid>
    );
  });
  if (Data.ru) {
    portfolioItems = Data.ru.portfolio.map(item => {
      return (
        <Grid item xs={10} sm={10} md={6} lg={6} key={item.key}>
          <Card
            picture={item.picture}
            alt={item.title}
            title={item.title}
            body={item.body}
          />
        </Grid>
      );
    });
    petItems = Data.ru.pet.map(item => {
      return (
        <Grid item xs={10} sm={10} md={4} lg={4} key={item.key}>
          <Card
            picture={item.picture}
            alt={item.alt}
            title={item.title}
            href={item.href}
          />
        </Grid>
      );
    });
  }
  return (
    <div style={mainStyle}>
      <Grid
        container
        spacing={3}
        alignItems="stretch"
        style={theme}
        justify="center"
      >
        {portfolioItems}
      </Grid>
      <h1
        style={{ backgroundColor: "#3f51b5", padding: "30px", color: "white" }}
      >
        PET Projects
      </h1>
      <Grid container spacing={3} alignItems="center" justify="center">
        {petItems}
      </Grid>

      <Grid
        container
        spacing={1}
        alignItems="center"
        style={theme}
        justify="center"
      >
        <Grid item xs={10} sm={10} md={4} lg={3}>
          <PortfolioItem />
        </Grid>
        <Grid item xs={10} sm={10} md={4} lg={3}>
          <PortfolioItem />
        </Grid>
        <Grid item xs={10} sm={10} md={4} lg={3}>
          <PortfolioItem />
        </Grid>
        <Grid item xs={10} sm={10} md={4} lg={3}>
          <PortfolioItem />
        </Grid>
        <Grid item xs={10} sm={10} md={4} lg={4}>
          <PortfolioItem />
        </Grid>
        <Grid item xs={10} sm={10} md={4} lg={4}>
          <PortfolioItem />
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
