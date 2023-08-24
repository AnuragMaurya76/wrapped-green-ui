import React from "react";
import "./Footer.scss";
import InfoCard from "../InfoCard/InfoCard";
import timeIcon from "../../assets/time_icon@2x.png";
import localizationIcon from "../../assets/localization_icon@2x.png";
import phoneIcon from "../../assets/phone_icon@2x.png";

function Footer() {
  return (
    <div className="footer">
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
      <div className="footer-circle"></div>
    </div>
  );
}
export default Footer;
