import React from "react";
import "./Header.scss";
import background_pict from "../../assets/background+pict@2x.png";
import background_pict2 from "../../assets/background_picture2@2x.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  return (
    <div className="header">
      <div className="header-info">
        <div className="header-info-title">Healthy & Fresh Food For You</div>
        <div className="header-info-message">
          Created for lovers of healthy, delicious and non-obviuos food.
        </div>
        <div className="header-info-menu-button">
          <div className="header-info-menu-button-title">
            Check Menu{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="header-info-menu-button-title-icon"
            />
          </div>
        </div>
        <img
          src={background_pict2}
          align="left"
          alt="no_image"
          className="header-info-chilli-image"
        />
      </div>
      <div className="header-logo">
        <div className="header-logo-circle">
          <img
            src={background_pict}
            alt="no_image"
            className="header-logo-circle-image"
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
