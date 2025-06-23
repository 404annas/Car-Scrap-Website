import React from "react";
import {
  Brands,
  Cards,
  CustomSection,
  Faqs,
  GetInTouch,
  Hero,
  Map,
  Steps,
} from "../components/components";
import Contact from "../components/Contact/Contact";

const HomeLayout = () => {
  return (
    <div>
      <Hero />
      <CustomSection />
      <Steps />
      <Brands />
      <Map />
      <Cards />
      <Faqs />
      {/* <GetInTouch /> */}
      <Contact />
    </div>
  );
};

export default HomeLayout;
