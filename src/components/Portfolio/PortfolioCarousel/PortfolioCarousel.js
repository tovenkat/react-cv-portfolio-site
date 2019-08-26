import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { Context } from "../../../Context";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "nuka-carousel";
import CardActionArea from "@material-ui/core/CardActionArea";

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

const PortfolioCarousel = props => {
  const classes = useStyles();
  const [lang] = useContext(Context);

  let data = props.items.en;
  // if (lang === "ru") {
  //   data = items.ru;
  // }
  console.log(data);
  return (
    <Carousel
      autoplay
      pauseOnHover={false}
      withoutControls
      autoplayInterval={4600}
      cellAlign="center"
      wrapAround
      speed={900}
    >
      {data.map(item => {
        return (
          <div
            key={item.id}
            style={{ width: "95%", margin: "auto", maxWidth: "800px" }}
          >
            <CardActionArea href={item.demoLink}>
              <img width="100%" src={item.img} alt={item.title} />
            </CardActionArea>
            {props.withoutTitle ? null : (
              <Typography className={classes.label} variant="h4">
                {item.title}
              </Typography>
            )}
          </div>
        );
      })}
    </Carousel>
  );
};

export default PortfolioCarousel;
