// import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Steps from "./Steps/Steps";
import Footer from "./Footer/Footer";
// import GetPrice from "./GetPrice/GetPrice";
import NavbarAno from "./NavbarAno/NavbarAno";
// import HeroAno from "./HeroAno/HeroAno";
import Works from "./Works/Works";
import Brands from "./Brands/Brands";
import Faqs from "./Faqs/Faqs";
import Contact from "./Contact/Contact"
import Map from "./Map/Map";
import Cards from './Cards/Cards';

const CarScrapWeb = () => {
  return (
    <div>
      <NavbarAno />
      <Hero />
      <Works />
      <Steps />
      <Brands />
      <Map />
      <Cards />
      <Faqs />
      {/* <GetPrice /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default CarScrapWeb;
