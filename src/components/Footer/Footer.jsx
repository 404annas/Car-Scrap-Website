import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-20 py-10">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <img
            className="w-36"
            src="https://cdn.prod.website-files.com/5ecdf499680e63499d01741e/619c315f4830e0af7cf10d5c_1800_salvage_primary%20logo_orange_RGB_optimised.svg"
            alt="Logo"
          />
          <div className="flex items-center justify-center gap-4 cursor-pointer">
            <img
              className="w-6"
              src="https://www.cartakebackaust.com/wp-content/uploads/2022/07/facebook.svg"
              alt="Facebook Logo"
            />
            <img
              className="w-6"
              src="https://www.cartakebackaust.com/wp-content/uploads/2023/11/X-logo-white.png"
              alt="X Logo"
            />
          </div>
        </div>

        <div className="flex flex-col sand text-white">
          <p className="cursor-pointer hover:text-[#76B82A] transition-all">
            About
          </p>
          <p className="cursor-pointer hover:text-[#76B82A] transition-all">
            Contact
          </p>
          <p className="cursor-pointer hover:text-[#76B82A] transition-all">
            Branches
          </p>
          <p className="cursor-pointer hover:text-[#76B82A] transition-all">
            FAQs
          </p>
          <p className="cursor-pointer hover:text-[#76B82A] transition-all">
            Business
          </p>
          <p className="cursor-pointer hover:text-[#76B82A] transition-all">
            Media
          </p>
          <p className="cursor-pointer hover:text-[#76B82A] transition-all">
            Site Map
          </p>
          <p className="cursor-pointer hover:text-[#76B82A] transition-all">
            Account Holder Login
          </p>
        </div>

        <div className="flex flex-col text-white">
          <p className="text-[#009CBC] font-extrabold mb-2 text-2xl tagg">Legal</p>
          <p className="sand cursor-pointer hover:text-[#76B82A] transition-all">
            Terms
          </p>
          <p className="sand cursor-pointer hover:text-[#76B82A] transition-all">
            Privacy
          </p>
          <p className="sand cursor-pointer hover:text-[#76B82A] transition-all">
            Cookies
          </p>
        </div>

        <div className="flex flex-col text-white">
          <p className="text-[#009CBC] font-extrabold mb-2 text-2xl tagg">Global</p>
          <p className="sand cursor-pointer hover:text-[#76B82A] transition-all">
            Ireland
          </p>
          <p className="sand cursor-pointer hover:text-[#76B82A] transition-all">
            New Zealand
          </p>
          <p className="sand cursor-pointer hover:text-[#76B82A] transition-all">
            Sapin
          </p>
          <p className="sand cursor-pointer hover:text-[#76B82A] transition-all">
            UK
          </p>
        </div>
      </div>

      <p className="text-center text-gray-300 mt-6">
        © 2005-2025 CarTakeBack Australia Pty Ltd, c/o CMS, Level 1, 190
        Flinders Street, Adelaide SA 5000 | Australian Business Number 14 151
        632 638
      </p>
    </footer>
  );
};

export default Footer;
