import React from "react";
import { FaCoins, FaVideo, FaUser } from "react-icons/fa";

const NavbarAno = () => {
  return (
    <>
      <nav className="p-4 mx-8">
        <div className="flex items-center justify-between">
          <img
            className="w-36"
            src="https://cdn.prod.website-files.com/5ecdf499680e63499d01741e/619c315f4830e0af7cf10d5c_1800_salvage_primary%20logo_orange_RGB_optimised.svg"
            alt="Logo"
          />
          <div className="flex items-center gap-6 tagg text-lg">
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
          <div className="flex items-center gap-2 text-white text-sm font-semibold cursor-pointer">
            <div className="bg-[#76B82A] hover:bg-[#6ba727] hover:-translate-y-1 transition-all duration-300 rounded-lg flex gap-2 items-center px-4 py-2 sand">
              <FaCoins size={16} />
              <button>Get a price</button>
            </div>
            <div className="bg-[#76B82A] hover:bg-[#6ba727] hover:-translate-y-1 transition-all duration-300 rounded-lg flex gap-2 items-center px-4 py-2 sand">
              <FaVideo size={16} />
              <button>Watch video</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Info Bar */}
      <div className="bg-[#009CBC] p-2">
        <div className="flex items-center justify-center gap-2">
          <FaUser size={14} className="text-white" />{" "}
          {/* Replaced 'A' with person icon */}
          <p className="sand font-semibold text-white">
            Buyers available 7 days from 8:30am - 5.00pm
          </p>
        </div>
      </div>
    </>
  );
};

export default NavbarAno;
