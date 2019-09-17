import React, { useState } from "react";
import portfolioImage from "../../assets/parallax/alex-loian-portfolio.jpg";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { react, web } from "./PortfolioData";
import PortfolioList from "./PortfolioList";

import { Parallax } from "react-parallax";

const theme = makeStyles({
  labelMain: {
    textAlign: "center",
    paddingTop: "10vh",
    paddingBottom: "10vh",
    marginBottom: "30px",
    color: "whitesmoke",
    textShadow: "7px 8px 5px black"
  },
  button: {
    backgroundColor: "#3f3d56",
    display: "block",
    margin: "30px auto"
  },
  items: {
    marginTop: "30px"
  }
});

const Portfolio = () => {
  const classes = theme();

  const config = {
    img: portfolioImage,
    widthParallax: 500,
    react: "React Portfolio",
    web: "Web Components",
    labels: ["Show Less", "Show Details"]
  };

  return (
    <>
      <Parallax bgImage={config.img} strength={config.widthParallax}>
        <Typography className={classes.labelMain} variant="h2">
          {config.react}
        </Typography>
      </Parallax>
      <div className={classes.items}>
        <PortfolioList items={react} />
      </div>
      <Parallax bgImage={config.img} strength={config.widthParallax}>
        <Typography className={classes.labelMain} variant="h2">
          {config.web}
        </Typography>
      </Parallax>

      <div className={classes.items}>
        <PortfolioList items={web} />
      </div>
    </>
  );
};

export default Portfolio;
