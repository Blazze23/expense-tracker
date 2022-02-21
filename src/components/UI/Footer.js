import React from "react";

import logo from "../../logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Powered by</h2>
      <img src={logo} className="logo" alt="logo"></img>
    </footer>
  );
};

export default Footer;
