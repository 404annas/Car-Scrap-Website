import { useEffect, useState } from "react";
import { FaCoins, FaVideo, FaUser } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
const NavbarAno = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up on component unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <nav className="p-3 px-6 sm:px-20 fixed  top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="flex items-center h-16 justify-between">
          {/* Logo */}
          <img className="w-28  md:w-40 h-auto" src={logo} alt="Logo" />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 sand font-bold text-md">
            <p className="cursor-pointer text-primary">Cash for cars</p>
            <p className="cursor-pointer hover:text-primary transition-all">
              Vehicles we buy
            </p>
            <p className="cursor-pointer hover:text-primary transition-all">
              Salvage tenders
            </p>
            <p className="cursor-pointer hover:text-primary transition-all">
              Salvage valuations
            </p>
            <Link
              to="contact-us"
              className="cursor-pointer hover:text-primary transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-2 text-white text-sm font-semibold cursor-pointer">
            <div className="bg-primary hover:bg-secondary hover:-translate-y-1 transition-all duration-300 rounded-lg flex gap-2 items-center px-4 py-2 sand">
              <FaCoins size={16} />
              <button>Get a price</button>
            </div>
            <div className="bg-primary hover:bg-secondary hover:-translate-y-1 transition-all duration-300 rounded-lg flex gap-2 items-center px-4 py-2 sand">
              <FaVideo size={16} />
              <button>Watch video</button>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button onClick={() => setIsOpen(true)} className="lg:hidden">
            <HiOutlineMenuAlt3 size={22} className="text-primary" />
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
          <p className="cursor-pointer text-primary">Cash for cars</p>
          <hr />
          <p className="cursor-pointer hover:text-primary transition-all">
            Vehicles we buy
          </p>
          <hr />
          <p className="cursor-pointer hover:text-primary transition-all">
            Salvage tenders
          </p>
          <hr />
          <p className="cursor-pointer hover:text-primary transition-all">
            Salvage valuations
          </p>
          <hr />

          {/* Responsive Buttons */}
          <div className="flex flex-col gap-4 pt-6 text-white text-sm font-semibold cursor-pointer">
            <div className="bg-primary hover:bg-secondary hover:-translate-y-1 transition-all duration-300 rounded-lg flex gap-2 items-center px-3 sm:px-4 py-2 sand">
              <FaCoins size={12} />
              <button className="text-xs sm:text-base">Get a price</button>
            </div>
            <div className="bg-primary hover:bg-secondary hover:-translate-y-1 transition-all duration-300 rounded-lg flex gap-2 items-center px-3 sm:px-4 py-2 sand">
              <FaVideo size={12} />
              <button className="text-xs sm:text-base">Watch video</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="bg-gradient-to-r from-primary to-secondary p-2  lg:block hidden mt-[90px]">
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
