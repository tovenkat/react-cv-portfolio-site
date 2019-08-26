import React, { useContext } from "react";
import LazyHero from "react-lazy-hero";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Parallax } from "react-parallax";

import { Context } from "../../Context";
import PortfolioCarousel from "../Portfolio/PortfolioCarousel/PortfolioCarousel";
import Recomendations from "./Recommendations/Recommendations";
import Skills from "./Skills/Skills";

import MacImage from "../../assets/images/parallax/alex-loian-parallax-1.jpg";
import cv from "../../assets/images/main/CV-Alex-Loian-Front-End-Developer-React-Resume.pdf";
import Avatar from "@material-ui/core/Avatar";
import mainAvatar from "../../assets/images/main/alex-loian-avatar.JPG";
import Stock4 from "../../assets/images/parallax/3.svg";
import Stock55 from "../../assets/images/parallax/1.svg";
import Stock5 from "../../assets/images/parallax/alex-loian-parallax-3.jpg";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default function MainPage() {
  const [language] = useContext(Context);

  const mainPicture = (
    <LazyHero
      opacity={0}
      minHeight="100vh"
      parallaxOffset={60}
      isCentered={true}
      imageSrc={MacImage}
    >
      <div style={{ color: "black", paddingBottom: "38vh" }}>
        <Typography variant="h4" gutterBottom>
          {language === "en" ? "Alex Loian" : "Алексей Лоян"}{" "}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {language === "en"
            ? "React, Redux, Javascript"
            : "Реакт, Редакс, ДжаваСкрипт"}
        </Typography>
      </div>
    </LazyHero>
  );

  const aboutMe = (
    <>
      <Typography variant="h4" gutterBottom>
        {language === "en" ? "About" : "Обо мне"}
      </Typography>
      <Avatar
        alt="Alex Loian Main Avatar"
        src={mainAvatar}
        style={{
          margin: "30px auto",
          width: 250,
          height: 250
        }}
      />
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <Typography variant="body1" color="textSecondary" component="p">
          I'm a multi-talented human. Most of my time I design and build digital
          products. I'm also a multi-disciplinary maker with over 2 years of
          experiences in React and JavaScript.
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          I don’t like to define myself by the work I’ve done. I define myself
          by the work I want to do. Skills can be taught, personality is
          inherent. I prefer to keep learning, continue challenging myself, and
          do interesting things that matter.
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          Fueled by high energy levels and boundless enthusiasm, I’m easily
          inspired and more then willing to follow my fascinations wherever they
          take me. I’m passionate, expressive, multi-talented spirit with a
          natural ability to entertain and inspire. I’m never satisfied to just
          come up with ideas. Instead I have an almost impulsive need to act on
          them.
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          I’m a people-person with deep emotions and empathy, a natural
          storyteller. I’m able to inspire and am at my best when I’m sharing my
          creative expressions with others. I currently work remotely and have a
          full-time commitment at InVision. Outside of my commitments I work
          with a select freelance client base. Feel free to get in touch by any
          means of communication.
        </Typography>
        <Button
          title="CV Download"
          download="Alex-Loian-CV-React-Developer"
          href={cv}
          variant="contained"
          style={{
            margin: "30px",
            background: "rgb(63, 61, 86)",
            color: "white"
          }}
        >
          {language === "en" ? "Download CV" : "Скачать Резюме"}
        </Button>
      </div>
    </>
  );

  const recomendArea = (
    <>
      <Typography
        style={{ margin: "30px", color: "#ffc107" }}
        variant="h4"
        gutterBottom
      >
        {language === "en" ? "Recommendations" : "Рекомендации"}
      </Typography>
      <Recomendations />
    </>
  );
  return (
    <div style={{ width: "100%", backgroundColor: "whitesmoke" }}>
      {mainPicture}
      <div
        style={{
          textAlign: "center",
          padding: "30px"
        }}
      >
        {aboutMe}
      </div>

      <div>
        <div style={styles}>
          <div name="Parallax" />

          <Parallax bgImage={Stock5} strength={500}>
            <div style={{ height: 500 }} />
          </Parallax>

          <div name="Parallax" />
          <Skills />

          <Parallax bgImage={Stock4} strength={500}>
            <div style={{ height: "90vh" }}>{recomendArea}</div>
          </Parallax>
          <div
            style={{
              height: "8vh",
              background: "rgb(63, 61, 86)",
              color: "#ffc107",
              boxShadow: "-4px -5px 4px 1px lightgrey"
            }}
          >
            Copyright. 2019
          </div>
        </div>
      </div>
    </div>
  );
}
