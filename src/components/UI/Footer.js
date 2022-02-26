import React from "react";

import logo from "../../logo.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>Powered by</h2>
      <img src={logo} className={styles.logo} alt="logo"></img>
    </footer>
  );
};

export default Footer;
