import React from "react";
import "./Review.scss";
import galleryPhoto1 from "../../assets/galery_photo1@2x.png";
import galleryPhoto2 from "../../assets/galery_photo2@2x.png";
import galleryPhoto3 from "../../assets/galery_photo3@2x.png";
import galleryPhoto4 from "../../assets/galery_photo4@2x.png";
import galleryPhoto5 from "../../assets/galery_photo5@2x.png";
import galleryPhoto6 from "../../assets/galery_photo6@2x.png";
import CustomImage from "../CustomImage/CustomImage";

function Review() {
  return (
    <div className="review">
      <div className="review-header">Good food = happy clients</div>
      <div className="review-grid">
        <CustomImage img={galleryPhoto1} />
        <CustomImage img={galleryPhoto2} />
        <CustomImage img={galleryPhoto3} />
        <CustomImage img={galleryPhoto4} />
        <CustomImage img={galleryPhoto5} />
        <CustomImage img={galleryPhoto6} />
      </div>
    </div>
  );
}

export default Review;
