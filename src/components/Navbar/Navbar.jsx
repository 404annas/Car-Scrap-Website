import React from "react";
import { MdCall } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="p-4 mx-10">
      <div className="flex items-center justify-between">
        <img
          className="w-44"
          src="https://www.cartakebackaust.com/wp-content/uploads/2022/11/car-take-back-logo-colour.svg"
          alt="Logo"
        />
        <div className="flex items-center gap-6 tagg text-xl">
          <p className="cursor-pointer text-[#76B82A]">Home</p>
          <p className="cursor-pointer hover:text-[#76B82A] transition-all">
            Quote
          </p>
          <p className="cursor-pointer hover:text-[#76B82A] transition-all">
            FAQs
          </p>
          <p className="cursor-pointer hover:text-[#76B82A] transition-all">
            Blog
          </p>
          <p className="cursor-pointer hover:text-[#76B82A] transition-all">
            Contact
          </p>
        </div>
        <div className="flex items-center gap-4 text-[#76B82A] text-2xl font-extrabold cursor-pointer">
          <p>
            <MdCall />
          </p>
          <p>1800 678 175</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
