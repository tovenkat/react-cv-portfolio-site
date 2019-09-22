import React, { useContext } from "react";
import LazyHero from "react-lazy-hero";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Parallax } from "react-parallax";
import { Context } from "../../Context";

import Recomendations from "./Recommendations/Recommendations";
import Skills from "./Skills/Skills";

import MacImage from "../../assets/parallax/alex-loian-parallax-1.jpg";
import cv from "../../assets/mainInfo/CV-Alex-Loian-Front-End-Developer-React-Resume.pdf";
import Avatar from "@material-ui/core/Avatar";
import mainAvatar from "../../assets/mainInfo/alex-loian-avatar.jpg";
import Stock5 from "../../assets/parallax/alex-loian-parallax-3.jpg";
import Developer from "../../assets/parallax/alex-loian-developer.svg";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default function MainPage() {
  const [language, , darkMode] = useContext(Context);

  const mainPicture = (
    <LazyHero
      opacity={0}
      minHeight="100vh"
      parallaxOffset={60}
      isCentered={true}
      imageSrc={MacImage}
    >
      <div style={{ color: "#3f3d56", paddingBottom: "38vh" }}>
        <Typography variant="h4" gutterBottom>
          {language === "en" ? "Alex Loian" : "Алексей Лоян"}{" "}
        </Typography>
        <Typography
          style={{ color: "#ffc107", textShadow: "3px 3px 2px #f0efef" }}
          variant="h6"
          gutterBottom
        >
          {language === "en"
            ? "React, WebComponents, Redux, Javascript"
            : "Реакт, Веб-компоненты, Редакс, ДжаваСкрипт"}
        </Typography>
      </div>
    </LazyHero>
  );

  const aboutMe = (
    <>
      {darkMode ? (
        <Typography Typography variant="h3" gutterBottom>
          Alex Loian
        </Typography>
      ) : (
        <Typography variant="h4" gutterBottom>
          {language === "en" ? "About" : "Обо мне"}
        </Typography>
      )}

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
        {language === "ru" ? (
          <>
            <Typography
              style={{ color: "rgb(255, 193, 7)" }}
              variant="h5"
              gutterBottom
            >
              Написано на Ангельском и трудно переводимо!
            </Typography>
            <Typography
              style={{ color: "rgb(255, 193, 7)" }}
              variant="h6"
              gutterBottom
            >
              Резюме качать ниже.
            </Typography>
          </>
        ) : null}
        <Typography variant="body1" color="textPrimary" component="p">
          I'm a multi-talented human. Most of my time I design and build digital
          products. I'm also a multi-disciplinary maker with over 2 years of
          experiences in React and JavaScript.
        </Typography>
        <Typography variant="body1" color="textPrimary" component="p">
          I don’t like to define myself by the work I’ve done. I define myself
          by the work I want to do. Skills can be taught, personality is
          inherent. I prefer to keep learning, continue challenging myself, and
          do interesting things that matter.
        </Typography>
        <Typography variant="body1" color="textPrimary" component="p">
          Fueled by high energy levels and boundless enthusiasm, I’m easily
          inspired and more then willing to follow my fascinations wherever they
          take me. I’m passionate, expressive, multi-talented spirit with a
          natural ability to entertain and inspire. I’m never satisfied to just
          come up with ideas. Instead I have an almost impulsive need to act on
          them.
        </Typography>
        <Typography variant="body1" color="textPrimary" component="p">
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
          color="primary"
          style={{ margin: "30px", backgroundColor: "#3f3d56" }}
        >
          {language === "en" ? "Download CV" : "Скачать Резюме"}
        </Button>
      </div>
    </>
  );

  const recomendArea = (
    <>
      <Typography style={{ margin: "30px" }} variant="h4" gutterBottom>
        {language === "en" ? "Recommendations" : "Рекомендации"}
      </Typography>
      <Recomendations />
    </>
  );
  return (
    <div style={{ width: "100%", backgroundColor: "whitesmoke" }}>
      {darkMode ? null : mainPicture}
      <div style={{ textAlign: "center", padding: "30px" }}>{aboutMe}</div>

      <div>
        <div style={styles}>
          <div name="Parallax" />

          <Parallax bgImage={Stock5} strength={500}>
            <div style={{ height: 500 }} />
          </Parallax>
          {recomendArea}

          <div name="Parallax" />
          <Parallax bgImage={Developer} strength={500}>
            <div style={{ height: "700px" }}>
              <Skills />
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  );
}
