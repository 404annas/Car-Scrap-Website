import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 sm:px-8 md:px-16 lg:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Logo & Social */}
        <div className="flex flex-col gap-4 items-start md:w-1/4">
          <img
            className="w-32 sm:w-36"
            src="https://cdn.prod.website-files.com/5ecdf499680e63499d01741e/619c315f4830e0af7cf10d5c_1800_salvage_primary%20logo_orange_RGB_optimised.svg"
            alt="Logo"
          />
          <div className="flex gap-4">
            <img
              className="w-5"
              src="https://www.cartakebackaust.com/wp-content/uploads/2022/07/facebook.svg"
              alt="Facebook Logo"
            />
            <img
              className="w-5"
              src="https://www.cartakebackaust.com/wp-content/uploads/2023/11/X-logo-white.png"
              alt="X Logo"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col text-white gap-2 md:w-1/4">
          {[
            "About",
            "Contact",
            "Branches",
            "FAQs",
            "Business",
            "Media",
            "Site Map",
            "Account Holder Login",
          ].map((item, index) => (
            <p
              key={index}
              className="sand cursor-pointer hover:text-[#76B82A] transition-all text-sm sm:text-base"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Legal Links */}
        <div className="flex flex-col text-white md:w-1/4">
          <p className="text-[#009CBC] font-extrabold mb-2 text-xl sm:text-2xl tagg">
            Legal
          </p>
          {["Ireland", "New Zealand", "Spain", "UK"].map((item, index) => (
            <p
              key={index}
              className="sand cursor-pointer hover:text-[#76B82A] transition-all text-sm sm:text-base"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Global Links */}
        <div className="flex flex-col text-white md:w-1/4">
          <p className="text-[#009CBC] font-extrabold mb-2 text-xl sm:text-2xl tagg">
            Global
          </p>
          {["Ireland", "New Zealand", "Spain", "UK"].map((item, index) => (
            <p
              key={index}
              className="sand cursor-pointer hover:text-[#76B82A] transition-all text-sm sm:text-base"
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Footer Bottom Text */}
      <p className="text-center text-gray-300 text-xs sm:text-sm mt-8 sand leading-relaxed">
        © 2005-2025 CarTakeBack Australia Pty Ltd, c/o CMS, Level 1, 190
        Flinders Street, Adelaide SA 5000 | Australian Business Number 14 151
        632 638
      </p>
    </footer>
  );
};

export default Footer;
