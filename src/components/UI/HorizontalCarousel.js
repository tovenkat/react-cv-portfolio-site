import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { Context } from "../../Context";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "nuka-carousel";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles({
  wrapper: {
    height: "60vh"
  },
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

const HorizontalCarousel = props => {
  const classes = useStyles();
  const [lang] = useContext(Context);

  let data = props.items.en;
  if (lang === "ru") {
    data = props.items.ru;
  }

  return (
    <div className={classes.wrapper}>
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
              key={new Date().getTime}
              style={{ width: "95%", margin: "auto", maxWidth: "800px" }}
            >
              <CardActionArea href={item.demoLink ? item.demoLink : null}>
                <img width="100%" src={item.img} alt={item.title} />
              </CardActionArea>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HorizontalCarousel;
