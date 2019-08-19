import React, { useState } from "react";
import portfolioImage from "../../assets/images/parallax/alex-loian-portfolio.jpg";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "nuka-carousel";
import { items } from "./PortfolioData";
import Fab from "@material-ui/core/Fab";

import Portfolio from "./Portfolio";

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

  let content = (
    <Carousel
      autoplay
      pauseOnHover={false}
      withoutControls
      autoplayInterval={4600}
      cellAlign="center"
      wrapAround
      speed={900}
    >
      {items.en.map(item => {
        return (
          <div
            key={item.id}
            style={{ width: "95%", margin: "auto", maxWidth: "800px" }}
          >
            <a href={item.demoLink}>
              <img width="100%" src={item.img} alt={item.title} />
            </a>
            <Typography className={classes.label} variant="h4">
              {item.title}
            </Typography>
          </div>
        );
      })}
    </Carousel>
  );
  if (details) {
    content = <Portfolio />;
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
