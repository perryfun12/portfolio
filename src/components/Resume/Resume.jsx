import React from "react";
import "./Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import resumepdf from "../../assets/Perry-Fung-Resume.pdf";

function Resume() {
  return (
    <div className="resume-background">
      <FontAwesomeIcon className="icons" icon={faAddressCard} />
      <div className="resume-main-content">Resume</div>
      <div className="resume-sub-content">My professional work experience</div>
      <a
        className="resume-link"
        href={resumepdf}
        rel="noreferrer"
        target="_blank"
      >
        <button type="button" className="resume-btn">
          View Resume
        </button>
      </a>
      <div className="image-filter"></div> {/* Add this for the image filter */}
    </div>
  );
}

export default Resume;
