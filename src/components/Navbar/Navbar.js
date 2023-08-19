import React from "react";
import wrapped_green from "../../assets/wrapped_green_logo@2x.png";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="nav-bar">
      <img src={wrapped_green} alt="Logo" className="nav-bar-logo" />
      <div className="nav-bar-items">
        <div className="nav-bar-item">About us</div>
        <div className="nav-bar-item">Menu</div>
        <div className="nav-bar-item">Contact</div>
      </div>
    </div>
  );
}
export default Navbar;
