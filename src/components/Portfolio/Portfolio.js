import React, { useState } from "react";
import portfolioImage from "../../assets/images/parallax/alex-loian-portfolio.jpg";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "nuka-carousel";
import { items } from "./PortfolioData";
import Fab from "@material-ui/core/Fab";

import PortfolioCarousel from "./PortfolioCarousel/PortfolioCarousel";

import PortfolioList from "./PortfolioList";

import { Parallax } from "react-parallax";

const useStyles = makeStyles({
  labelMain: {
    textAlign: "center",
    paddingTop: "10vh",
    paddingBottom: "10vh",
    color: "whitesmoke",
    textShadow: "7px 8px 5px black"
  },
  label: {
    textAlign: "center",
    padding: "30px"
  },
  root: {
    width: "100%"
  },
  heading: {
    margin: "auto"
  },
  button: {
    display: "flex",
    justifyContent: "center",
    padding: "30px"
  }
});
const NewPortfolio = () => {
  const classes = useStyles();
  const [details, setDetails] = useState(false);

  let content = <PortfolioCarousel />;
  if (details) {
    content = <PortfolioList />;
  }
  return (
    <>
      <Parallax bgImage={portfolioImage} strength={500}>
        <Typography className={classes.labelMain} variant="h2">
          React Portfolio
        </Typography>
      </Parallax>

      <div className={classes.button}>
        <Fab
          variant="extended"
          onClick={() => setDetails(!details)}
          color="primary"
          aria-label="add"
        >
          {details ? "Show Less" : "Show Details"}
        </Fab>
      </div>
      {content}
    </>
  );
};

export default NewPortfolio;
