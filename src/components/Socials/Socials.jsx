import React from "react";
import "./Socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import portfoliopdf from "../../assets/SOCIAL MEDIA PORTFOLIO.pdf";
function Socials() {
  return (
    <div className="socials-background">
      <FontAwesomeIcon className="icons" icon={faBriefcase} />
      <div className="portfolio-main-content">Socials</div>
      <div className="portfolio-sub-content">
        Social Media Projects I've done so far
      </div>
      <a
        className="portfolio-link"
        href={portfoliopdf}
        rel="noreferrer"
        target="_blank"
      >
        <button type="button" className="portfolio-btn">
          View Social Media Portfolio
        </button>
      </a>
    </div>
  );
}
export default Socials;
