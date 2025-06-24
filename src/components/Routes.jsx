// import Navbar from './Navbar/Navbar';
import Hero from "./Hero/Hero";
import Steps from "./Steps/Steps";
import Footer from "./Footer/Footer";
import NavbarAno from "./NavbarAno/NavbarAno";
// import HeroAno from "./HeroAno/HeroAno";
import Works from "./Works/Works";
import Brands from "./Brands/Brands";
import Faqs from "./Faqs/Faqs";
import Contact from "./Contact/Contact";
import Map from "./Map/Map";
import Cards from "./Cards/Cards";
import { CustomSection, Footernew, GetInTouch } from "./components";
import { Routes as Router, Route } from "react-router-dom";
import HomeLayout from "../Screen/HomeLayout";
import { Services } from "../Screen/screen";

const Routes = () => {
  return (
    <div>
      <NavbarAno />
      <Router>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/contact-us" element={<GetInTouch />} />
        <Route path="/services" element={<Services />} />
      </Router>
      <Footernew />
    </div>
  );
};

export default Routes;
