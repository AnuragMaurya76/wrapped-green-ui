import React, { forwardRef } from "react";
import "./Contact.scss";
import InfoCard from "../InfoCard/InfoCard";
import timeIcon from "../../assets/time_icon@2x.png";
import localizationIcon from "../../assets/localization_icon@2x.png";
import phoneIcon from "../../assets/phone_icon@2x.png";
import wrappedGreenLogo from "../../assets/wrapped_green_logo2@2x.png";
import facebook from "../../assets/Icon awesome-facebook.svg";
import instagram from "../../assets/Icon awesome-instagram.svg";
import twitter from "../../assets/Icon awesome-twitter.svg";

const Contact = forwardRef((props, ref) => {
  return (
    <div className="footer" ref={ref}>
      <div className="footer-info-card">
        <InfoCard
          title={"Today 12 pm - 9 pm"}
          subTitle={"Working Hours"}
          img={timeIcon}
        />
        <InfoCard
          title={"Whitefield, Bangalore"}
          subTitle={"Find us"}
          img={localizationIcon}
        />
        <InfoCard
          title={"8758736988"}
          subTitle={"Contact Us"}
          img={phoneIcon}
        />
      </div>
      <div className="footer-circle">
        <div className="footer-circle-logo">
          <img
            src={wrappedGreenLogo}
            alt="img_alt"
            className="footer-circle-logo-image"
          />
        </div>
        <div className="footer-circle-navigation">
          <div className="footer-circle-navigation-button">About us</div>
          <div className="footer-circle-navigation-button">Menu</div>
          <div className="footer-circle-navigation-button">Contact</div>
        </div>
        <div className="footer-circle-social">
          <img
            className="footer-circle-social-image"
            src={facebook}
            alt="facebook"
          />
          <img
            className="footer-circle-social-image"
            src={twitter}
            alt="twitter"
          />
          <img
            className="footer-circle-social-image"
            src={instagram}
            alt="instagram"
          />
        </div>
      </div>
    </div>
  );
});
export default Contact;
