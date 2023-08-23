import React from "react";
import "./FoodCard.scss";

function FoodCard(props) {
  return (
    <div className="food-card">
      <img src={props.img} alt="image_for_food" className="food-card-image" />
      <div className="food-card-info">
        <div className="food-card-info-heading">{props.heading}</div>
        <div className="food-card-info-cost">{props.cost}</div>
      </div>
      <div className="food-card-sub-heading">{props.subHeading}</div>
    </div>
  );
}
export default FoodCard;
