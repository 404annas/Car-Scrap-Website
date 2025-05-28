import React, { useState } from "react";
import { FaCoins, FaVideo, FaUser } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const NavbarAno = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="p-3 px-6 sm:px-20 fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            className="w-28 sm:w-32 md:w-36 max-w-full h-auto"
            src="https://cdn.prod.website-files.com/5ecdf499680e63499d01741e/619c315f4830e0af7cf10d5c_1800_salvage_primary%20logo_orange_RGB_optimised.svg"
            alt="Logo"
          />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 tagg text-lg">
            <p className="cursor-pointer text-[#76B82A]">Cash for cars</p>
            <p className="cursor-pointer hover:text-[#76B82A] transition-all">
              Vehicles we buy
            </p>
            <p className="cursor-pointer hover:text-[#76B82A] transition-all">
              Salvage tenders
            </p>
            <p className="cursor-pointer hover:text-[#76B82A] transition-all">
              Salvage valuations
            </p>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-2 text-white text-sm font-semibold cursor-pointer">
            <div className="bg-[#76B82A] hover:bg-[#6ba727] hover:-translate-y-1 transition-all duration-300 rounded-lg flex gap-2 items-center px-4 py-2 sand">
              <FaCoins size={16} />
              <button>Get a price</button>
            </div>
            <div className="bg-[#76B82A] hover:bg-[#6ba727] hover:-translate-y-1 transition-all duration-300 rounded-lg flex gap-2 items-center px-4 py-2 sand">
              <FaVideo size={16} />
              <button>Watch video</button>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button onClick={() => setIsOpen(true)} className="lg:hidden">
            <HiOutlineMenuAlt3 size={22} className="text-[#76B82A]" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white z-50 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg sm:text-lg font-bold tagg">Salvage</h2>
          <button onClick={() => setIsOpen(false)}>
            <HiX size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Responsive Menu Items */}
        <div className="flex flex-col gap-5 p-6 sand font-medium text-sm sm:text-md">
          <p className="cursor-pointer text-[#76B82A]">Cash for cars</p>
          <hr />
          <p className="cursor-pointer hover:text-[#76B82A] transition-all">
            Vehicles we buy
          </p>
          <hr />
          <p className="cursor-pointer hover:text-[#76B82A] transition-all">
            Salvage tenders
          </p>
          <hr />
          <p className="cursor-pointer hover:text-[#76B82A] transition-all">
            Salvage valuations
          </p>
          <hr />

          {/* Responsive Buttons */}
          <div className="flex flex-col gap-4 pt-6 text-white text-sm font-semibold cursor-pointer">
            <div className="bg-[#76B82A] hover:bg-[#6ba727] hover:-translate-y-1 transition-all duration-300 rounded-lg flex gap-2 items-center px-3 sm:px-4 py-2 sand">
              <FaCoins size={12} />
              <button className="text-xs sm:text-base">Get a price</button>
            </div>
            <div className="bg-[#76B82A] hover:bg-[#6ba727] hover:-translate-y-1 transition-all duration-300 rounded-lg flex gap-2 items-center px-3 sm:px-4 py-2 sand">
              <FaVideo size={12} />
              <button className="text-xs sm:text-base">Watch video</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="bg-[#009CBC] p-2 lg:block hidden mt-[78px]">
        <div className="flex items-center justify-center gap-2">
          <FaUser size={14} className="text-white" />
          <p className="sand font-semibold text-white">
            Buyers available 7 days from 8:30am - 5.00pm
          </p>
        </div>
      </div>
    </>
  );
};

export default NavbarAno;
