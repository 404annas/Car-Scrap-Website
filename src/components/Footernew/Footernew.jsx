import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const SocialButton = ({ Icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white px-1 py-1 text-first rounded hover:bg-gray-100 transition-colors"
  >
    <Icon size={28} />
  </a>
);

const Footer = () => {
  return (
    // Main footer container with the primary background color
    <footer className="bg-gradient-to-r from-[#0A0A5B] via-primary to-primary text-white py-12 px-5 lg:px-24 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-xs leading-relaxed">
            Rewire is the most trusted and respectful way of scrapping your
            registered vehicle, which is no longer fit to drive and is
            classified as End-of-Life Vehicle (ELV). With fair pricing mechanism
            and state of the art facility to dismantle the vehicles, Rewire is
            committed to serve its customers while ensuring that scrapping is
            done in environmental friendly way, in compliance with government
            norms.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col   gap-5 uppercase text-[12px]">
          <div className="flex flex-row   gap-9">
            <div className="flex flex-col items-start gap-2 ">
              <h1>Sell</h1>
              <h1>Get Best Price</h1>
              <h1>About</h1>
            </div>
            <div className="flex flex-col items-start  gap-2 ">
              <h1>Term and Conditions</h1>
              <h1>Contact Us</h1>
            </div>
          </div>
          <div className="flex flex-row gap-1">
            <SocialButton Icon={FaFacebookF} link="https://facebook.com" />
            <SocialButton Icon={FaInstagram} link="https://instagram.com" />
            <SocialButton Icon={FaTwitter} link="https://twitter.com" />
            <SocialButton Icon={FaLinkedinIn} link="https://linkedin.com" />
            <SocialButton Icon={FaYoutube} link="https://youtube.com" />
          </div>
        </div>
        {/* Column 3: Address and Contact Info */}
        <div className="flex flex-col items-center gap-5 ">
          <p className=" border-l  pl-4 text-[12px]">
            Tata Motors Ltd 4th Floor , Ahura Centre 82 Mahakali Caves Road MIDC
            ,Andheri East Mumbai - 400093
          </p>
          {/* <p className="text-sm">Call us at : 1800 2097979</p>
          <p className="text-sm">Email us at rewiresupport@tatamotors.com</p> */}
          <button className=" uppercase px-14 py-1 rounded-full  text-[12px] bg-white text-black font-light">
            get Instant Price
          </button>
        </div>

        {/* Column 4: Action Buttons */}
        <div className="flex flex-col items-center gap-5 ">
          <p className=" border-l  pl-4 text-[12px]">
            <div className="flex flex-col ">
              <h1>Call us at : 1800 2097979</h1>
              <h1>Email us at rewiresupport@tatamotors.com</h1>
            </div>
          </p>
          {/* <p className="text-sm"></p>
          <p className="text-sm"></p> */}
          <button className=" uppercase mt-4 px-14 py-1 rounded-full  text-[12px] bg-white text-black font-light">
            Request Call Back
          </button>
        </div>
      </div>

      {/* Copyright Section */}

      {/* Floating Call Button - Replaced with inline SVG */}
    </footer>
  );
};

export default Footer;
