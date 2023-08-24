import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import AboutUs from "../../components/AboutUs/AboutUs";
import Menu from "../../components/Menu/Menu";
import Review from "../../components/Review/Review";
import Footer from "../../components/Footer/Footer";
function HomePageWeb() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Review />
      <Footer />
    </div>
  );
}
export default HomePageWeb;
