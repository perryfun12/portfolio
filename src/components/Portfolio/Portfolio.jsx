import React from "react";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import portfoliopdf from "src/assets/David Jin Resume(M).pdf";

function Portfolio() {
  return (
    <div className="portfolio-background">
      <FontAwesomeIcon className="icons" icon={faBriefcase} />
      <div className="portfolio-main-content">Portfolio</div>
      <div className="portfolio-sub-content">
        Personal Projects I've done so far
      </div>
      <a
        className="portfolio-link"
        href={portfoliopdf}
        rel="noreferrer"
        target="_blank"
      >
        <button type="button" className="portfolio-btn">
          View Portfolio
        </button>
      </a>
    </div>
  );
}

export default Portfolio;
