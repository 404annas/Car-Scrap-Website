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
import QuerySection from "../components/QuerySection/QuerySection";

const HomeLayout = () => {
  return (
    <div>
      <Hero />
      <CustomSection />
      <Steps />
      <QuerySection />
      <Brands />
      {/* <Map /> */}
      {/* <Cards /> */}
      <Faqs />
      {/* <GetInTouch /> */}
      <Contact />
    </div>
  );
};

export default HomeLayout;
