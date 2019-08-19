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
  label: {
    textAlign: "center",
    padding: "30px"
  },
  root: {
    width: "100%"
  },
  heading: {
    margin: "auto"
  }
});
const NewPortfolio = () => {
  const classes = useStyles();
  const [details, setDetails] = useState(true);

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
          <div style={{ width: "95%", margin: "auto", maxWidth: "900px" }}>
            <Typography className={classes.label} variant="h4">
              {item.title}
            </Typography>
            <img width="100%" src={item.img} alt={item.title} />
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
        <div style={{ height: 400 }}> </div>
      </Parallax>
      <Typography className={classes.label} variant="h3">
        React Portfolio
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Fab variant="extended" color="primary" aria-label="add">
          View All
        </Fab>
      </div>
      {content}
    </>
  );
};

export default NewPortfolio;
