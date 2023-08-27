import React, { forwardRef } from "react";
import FoodCard from "../FoodCard/FoodCard";
import MenuPhoto1 from "../../assets/menu_photo1@2x.png";
import MenuPhoto2 from "../../assets/menu_photo2@2x.png";
import MenuPhoto3 from "../../assets/menu_photo_3@2x.png";

import "./Menu.scss";
const Menu = forwardRef((props, ref) => {
  return (
    <div className="menu" ref={ref}>
      <div className="menu-header">
        <div className="menu-header-heading">Menu</div>
        <div className="menu-header-sub-heading">Explore Our Best Food</div>
        <div className="menu-header-info">
          Below you can see our best selling meals!
        </div>
      </div>
      <div className="menu-card">
        <div className="menu-card-1">
          <FoodCard
            img={MenuPhoto1}
            heading="Mighty Burger"
            cost="199 Rs."
            subHeading="Served with fries and drink"
          />
        </div>
        <div className="menu-card-2">
          <FoodCard
            img={MenuPhoto2}
            heading="Chickpae's Salad"
            cost="99 Rs."
            subHeading="Served with fries and drink"
          />
        </div>
        <div className="menu-card-3">
          <FoodCard
            img={MenuPhoto3}
            heading="Chickpae's Wrap"
            cost="149 Rs."
            subHeading="Served with fries and drink"
          />
        </div>
      </div>
    </div>
  );
});
export default Menu;
