import React from "react";
import "./CustomImage.scss";

function CustomImage(props) {
  return <img className="custom-image" src={props.img} alt="img_alt"></img>;
}
export default CustomImage;
