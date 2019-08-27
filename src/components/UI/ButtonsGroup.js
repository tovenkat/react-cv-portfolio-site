import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import { FaPhone, FaLinkedin, FaGithub, FaPaperclip } from "react-icons/fa";

import cv from "../../assets/mainInfo/CV-Alex-Loian-Front-End-Developer-React-Resume.pdf";

const ButtonsGroup = props => {
  const theme = {
    color: props.color || "blue"
  };
  return (
    <>
      <Button
        size="small"
        color="primary"
        style={theme}
        title="CV Download"
        download="Alex-Loian-CV-React-Developer"
        href={cv}
      >
        CV
      </Button>
      <IconButton
        size="small"
        color="primary"
        style={theme}
        label="GitHuB"
        title="GitHuB"
        href="https://github.com/AlexLDP"
      >
        <FaGithub />
      </IconButton>
      <IconButton
        size="small"
        color="primary"
        style={theme}
        title="LinkedIn"
        href="https://www.linkedin.com/in/alex-loian-82828284"
      >
        <FaLinkedin />
      </IconButton>
      <IconButton
        title="Call Me"
        style={theme}
        size="small"
        color="primary"
        href="tel:0980506389"
      >
        <FaPhone />
      </IconButton>
      <IconButton
        size="small"
        color="primary"
        style={theme}
        title="Email Me"
        href="mailto:wisehelper@gmail.com"
      >
        <FaPaperclip />
      </IconButton>
    </>
  );
};

export default ButtonsGroup;
