import React from "react";
import wrapped_green from "../../assets/wrapped_green_logo@2x.png";
import "./Navbar.scss";
function Navbar(props) {
  function navigateToComponent(ref) {
    ref.current.scrollIntoView({ behavior: "smooth", top: 80 });
  }

  return (
    <div className="nav-bar">
      <img src={wrapped_green} alt="Logo" className="nav-bar-logo" />
      <div className="nav-bar-items">
        <div
          className="nav-bar-item"
          onClick={() => navigateToComponent(props.aboutUsRef)}
        >
          About us
        </div>
        <div
          className="nav-bar-item"
          onClick={() => navigateToComponent(props.menuRef)}
        >
          Menu
        </div>
        <div
          className="nav-bar-item"
          onClick={() => navigateToComponent(props.contactRef)}
        >
          Contact
        </div>
      </div>
    </div>
  );
}
export default Navbar;
