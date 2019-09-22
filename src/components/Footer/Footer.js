import React, { useContext } from "react";
import { Context } from "../../Context";
import ButtonsGroup from "../UI/ButtonsGroup";
import styles from "./Footer.module.css";

const Footer = () => {
  const [, , darkMode] = useContext(Context);
  return (
    <footer
      style={{ backgroundColor: darkMode ? "black" : "" }}
      className={styles.wrapper}
    >
      <div className={styles.buttons}>
        <ButtonsGroup color="#ffc107" />
      </div>
      <p>© Copyright 2019. Alex Loian</p>
    </footer>
  );
};

export default Footer;
