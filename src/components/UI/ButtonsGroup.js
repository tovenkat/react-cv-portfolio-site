import React from "react";
import IconButton from "@material-ui/core/IconButton";

import {
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaPaperclip,
  FaFileWord
} from "react-icons/fa";

import cv from "../../assets/mainInfo/CV-Alex-Loian-Front-End-Developer-React-Resume.pdf";

const ButtonsGroup = props => {
  const theme = {
    color: props.color || "blue"
  };
  return (
    <>
      <IconButton
        size="small"
        color="primary"
        style={theme}
        label="CV Download"
        title="CV Download"
        download="Alex-Loian-CV-React-Developer"
        href={cv}
      >
        <FaFileWord />
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
