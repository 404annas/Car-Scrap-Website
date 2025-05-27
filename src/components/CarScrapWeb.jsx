import React from "react";
// import Navbar from './Navbar/Navbar'
// import Hero from './Hero/Hero'
import Steps from "./Steps/Steps";
import Footer from "./Footer/Footer";
import GetPrice from "./GetPrice/GetPrice";
import NavbarAno from "./NavbarAno/NavbarAno";
import HeroAno from "./HeroAno/HeroAno";
import Works from "./Works/Works";

const CarScrapWeb = () => {
  return (
    <div>
      {/* <NavbarAno /> */}
      <HeroAno />
      <Works />
      <Steps />
      <GetPrice />
      <Footer />
    </div>
  );
};

export default CarScrapWeb;
