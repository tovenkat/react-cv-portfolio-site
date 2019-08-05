import React from "react";
import LazyHero from "react-lazy-hero";
import MacImage from "../../assets/images/alex-loian-dummy-picture-1.jpg";
import Stock2 from "../../assets/images/alex-loian-cv-stock-photos-2.jpg";
import Stock3 from "../../assets/images/alex-loian-cv-stock-photos-3.jpg";
import Stock4 from "../../assets/images/alex-loian-cv-stock-photos-4.jpg";
import Stock5 from "../../assets/images/alex-loian-cv-stock-photos-5.jpg";
import Stock6 from "../../assets/images/alex-loian-cv-stock-photos-6.jpg";
import Stock7 from "../../assets/images/alex-loian-cv-stock-photos-7.jpg";

import { Parallax } from "react-parallax";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

export default function MainPage() {
  return (
    <div style={{ width: "100%", backgroundColor: "whitesmoke" }}>
      <LazyHero
        opacity={0}
        minHeight="100vh"
        parallaxOffset={60}
        isCentered={true}
        imageSrc={MacImage}
      >
        <div style={{ color: "black", paddingBottom: "38vh" }}>
          <h1>Alex Loian</h1>
          <h3>React, Redux, Javascript</h3>
        </div>
      </LazyHero>
      <div style={{ textAlign: "center" }}>
        <h2>Сайт в разработке</h2>
      </div>
      <div style={{ height: "300px", backgroundColor: "cyan" }}>1</div>

      <div>
        <div style={styles}>
          <div name="Parallax" />
          <Parallax bgImage={Stock5} strength={500}>
            <div style={{ height: 500 }}>
              <div style={insideStyles}>HTML inside the parallax</div>
            </div>
          </Parallax>
          <h1>| | |</h1>
          <div name="Parallax" />
          <Parallax bgImage={Stock6} strength={500}>
            <div style={{ height: 500 }}>
              <div style={insideStyles}>HTML inside the parallax</div>
            </div>
          </Parallax>
          <h1>| | |</h1>
          <div name="Parallax" />
          <Parallax bgImage={Stock4} strength={500}>
            <div style={{ height: 500 }}>
              <div style={insideStyles}>HTML inside the parallax</div>
            </div>
          </Parallax>
          <h1>| | |</h1>
        </div>
      </div>
    </div>
  );
}
