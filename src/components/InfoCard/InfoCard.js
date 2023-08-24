import React from "react";
import "./InfoCard.scss";

function InfoCard(props) {
  return (
    <div className="info-card">
      <img src={props.img} alt="alt_image" className="info-card-logo" />
      <div className="info-card-title">{props.title}</div>
      <div className="info-card-sub-title">{props.subTitle}</div>
    </div>
  );
}
export default InfoCard;
