import React, { useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import AboutUs from "../../components/AboutUs/AboutUs";
import Menu from "../../components/Menu/Menu";
import Review from "../../components/Review/Review";
import Contact from "../../components/Contact/Contact";
function HomePageWeb() {
  const aboutUsRef = useRef(null);
  const menuRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div>
      <Navbar
        aboutUsRef={aboutUsRef}
        menuRef={menuRef}
        contactRef={contactRef}
      />
      <Header />
      <AboutUs ref={aboutUsRef} />
      <Menu ref={menuRef} />
      <Review />
      <Contact ref={contactRef} />
    </div>
  );
}
export default HomePageWeb;
