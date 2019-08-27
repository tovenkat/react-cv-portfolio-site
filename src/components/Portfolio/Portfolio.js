import React, { useState } from "react";
import portfolioImage from "../../assets/parallax/alex-loian-portfolio.jpg";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { react, web } from "./PortfolioData";
import Fab from "@material-ui/core/Fab";
import HorizontalCarousel from "../UI/HorizontalCarousel";
import PortfolioList from "./PortfolioList";

import { Parallax } from "react-parallax";

const theme = makeStyles({
  labelMain: {
    textAlign: "center",
    paddingTop: "10vh",
    paddingBottom: "10vh",
    color: "whitesmoke",
    textShadow: "7px 8px 5px black"
  },
  button: {
    color: "white",
    display: "block",
    margin: "30px auto"
  }
});

const reactPortfolio = state => {
  return state ? (
    <PortfolioList items={react} />
  ) : (
    <HorizontalCarousel items={react} />
  );
};

const webPortfolio = state => {
  return state ? (
    <PortfolioList items={web} />
  ) : (
    <HorizontalCarousel items={web} />
  );
};

const Portfolio = () => {
  const classes = theme();

  const [detailsReact, setDetailsReact] = useState(false);
  const [detailsWeb, setDetailsWeb] = useState(false);

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

      <Fab
        variant="extended"
        onClick={() => setDetailsReact(!detailsReact)}
        color="primary"
        className={classes.button}
        aria-label="react details"
      >
        {detailsReact ? config.labels[0] : config.labels[1]}
      </Fab>
      {reactPortfolio(detailsReact)}

      <Parallax bgImage={config.img} strength={config.widthParallax}>
        <Typography className={classes.labelMain} variant="h2">
          {config.web}
        </Typography>
      </Parallax>

      <Fab
        variant="extended"
        onClick={() => setDetailsWeb(!detailsWeb)}
        color="primary"
        className={classes.button}
        aria-label="add"
      >
        {detailsWeb ? config.labels[0] : config.labels[1]}
      </Fab>

      {webPortfolio(detailsWeb)}
    </>
  );
};

export default Portfolio;
