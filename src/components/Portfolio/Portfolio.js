import React, { useState } from "react";
import portfolioImage from "../../assets/images/parallax/alex-loian-portfolio.jpg";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { items, web } from "./PortfolioData";
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
  const [detailsReact, setDetailsReact] = useState(false);
  const [detailsWeb, setDetailsWeb] = useState(false);

  let reactContent = <PortfolioCarousel items={items} />;
  if (detailsReact) {
    reactContent = <PortfolioList items={items} />;
  }

  let webComponentsContent = <PortfolioCarousel items={web} />;
  if (detailsWeb) {
    webComponentsContent = <PortfolioList items={web} />;
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
          onClick={() => setDetailsReact(!detailsReact)}
          color="primary"
          aria-label="add"
        >
          {detailsReact ? "Show Less" : "Show Details"}
        </Fab>
      </div>
      {reactContent}
      <Parallax bgImage={portfolioImage} strength={500}>
        <Typography className={classes.labelMain} variant="h2">
          Web Components
        </Typography>
      </Parallax>

      <div className={classes.button}>
        <Fab
          variant="extended"
          onClick={() => setDetailsWeb(!detailsWeb)}
          color="primary"
          aria-label="add"
        >
          {detailsWeb ? "Show Less" : "Show Details"}
        </Fab>
      </div>
      {webComponentsContent}
    </>
  );
};

export default NewPortfolio;
