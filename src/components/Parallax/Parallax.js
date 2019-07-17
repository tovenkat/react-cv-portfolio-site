import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

import Button from "@material-ui/core/Button";
import BuildIcon from "@material-ui/icons/Build";
import ReactLogo from "../../assets/images/alex-loian-skills-react-logo.svg";
import MacImage from "../../assets/images/alex-loian-dummy-picture-1.jpg";
import classes from "./Parallax.module.css";
import Qr from "../../assets/images/alex-loian-qr-code-telephone.png"
// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
// const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
// const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
// const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
// const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
// const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
// const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>
const imageWrapper = image => `url(${image})`;

class Custom extends React.Component {
  render() {
    const page1 = (
      <div>
        <ParallaxLayer
          className={classes.First}
          offset={0}
          speed={1}
          factor={3}
          style={{
            backgroundImage: imageWrapper(MacImage),
            backgroundSize: "contain",
            backgroundPositionX: "center",
            top: "0px"
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={1.4}
          onClick={() => this.parallax.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "black"
          }}
        >
          <h1>Alex Loian</h1>
          <h2>Front-End Web Developer</h2>
          <h5>React,Redux,JavaScript, CSS, HTML</h5>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.7}
          speed={2.4}
          onClick={() => this.parallax.scrollTo(1)}
          style={{display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginLeft:'20px',
          flexDirection: "row",
          color: "black"}}
        
        >
          <img src={Qr} width='100px' height='100px' alt='Phone'/>
        </ParallaxLayer>

      </div>
    );
    const page2 = (
      <div>
        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            alt="Alex Loian"
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            alt="Alex Loian"
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            alt="Alex Loian"
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.1}
          speed={0.6}
          style={{ pointerEvents: "none" }}
        >
          <img
            alt="Alex Loian"
            src={ReactLogo}
            style={{ width: "20%", marginLeft: "70%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            alt="Alex Loian"
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            alt="Alex Loian"
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            alt="Alex Loian"
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            alt="Alex Loian"
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            alt="Alex Loian"
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            alt="Alex Loian"
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.6}
          onClick={() => this.parallax.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column"
          }}
        > <p>Searching for:  </p>
        <h2>Front-End Web Developer</h2>
        <h3>Strong Junior Position</h3>
          
          <img alt="Alex Loian" src={url("bash")} style={{ width: "30%" }} />
          <h2>React/Redux/JS</h2>
          <p>Location: Dnipro, Ukraine</p>
        </ParallaxLayer>
      </div>
    );
    const page3 = (
      <div>
        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true)
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />

        <ParallaxLayer offset={2.4} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            alt="Alex Loian"
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            alt="Alex Loian"
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.3}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            pointerEvents: "none"
          }}
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            pointerEvents: "none"
          }}>
            <p>Searching for:  </p>
          <h2> Front-End Web Developer</h2>
          <h2>React/Redux/JS</h2>
          <h3>Strong Junior Position</h3>
          <p>Location: Dnipro, Ukraine</p>
          </div>
          
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={() => this.parallax.scrollTo(0)}
        >
          <img
            alt="Alex Loian"
            src={url("clients-main")}
            style={{ width: "40%" }}
          />
        </ParallaxLayer>
      </div>
    );
    return (
      <Parallax
        ref={ref => (this.parallax = ref)}
        pages={4}
        style={{ backgroundColor: "whitesmoke", top: "0px" }}
      >
        <div style={{ position: "fixed", bottom: 15, right: 15, zIndex: 100 }}>
          <Button onClick={() => this.parallax.scrollTo(0)}>
            <BuildIcon />
          </Button>
        </div>

        {page1}
        {page2}
        {page3}
        
      </Parallax>
    );
  }
}

export default Custom;
