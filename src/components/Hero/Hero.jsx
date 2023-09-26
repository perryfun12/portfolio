import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="hero-background">
      <div className="hero-main-content">Perry Fung</div>
      <div className="hero-sub-content">
        <a
          href="https://www.linkedin.com/in/perry-fung/"
          rel="noreferrer"
          target="_blank"
          className="icons icon-spacing"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="mailto:perryfung5@gmail.com"
          rel="noreferrer"
          target="_blank"
          className="icons"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}

export default Hero;
