import React from "react";
import vegetable_table from "../../assets/vegetable_table@2x.png";
import "./AboutUs.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ABOUT_US_INFO } from "../../constants/MessageConstants";
function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-logo-circle">
        <img
          src={vegetable_table}
          alt="vegetable_log"
          className="about-us-logo-circle-image"
        />
      </div>
      <div className="about-us-info">
        <div className="about-us-info-heading">About us</div>
        <div className="about-us-info-sub-heading">Few Words about us</div>
        <div className="about-us-info-info">{ABOUT_US_INFO}</div>
        <div className="about-us-info-menu-button">
          <div className="about-us-info-menu-button-title">
            Learn More{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="about-us-info-menu-button-title-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
