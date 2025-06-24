import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { FaVoicemail } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
export default function GetInTouchSection() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Phone number submitted:", phoneNumber);
  };

  return (
    <div className="min-h-screen pb-14 flex items-center justify-center bg-[#F2F8FF] px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl sand font-bold text-blue-900 mb-2">
            Get in touch
          </h2>
        </div>

        {/* Contact Information and Form */}
        <div className="flex flex-col lg:flex-row items-center justify-center  gap-8 lg:gap-10">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-8 ">
            {/* Call Us */}
            <div className="flex flex-row items-center gap-2 sand">
              <FiPhoneCall size={30} className="text-first" />
              <div className="">
                <p className="text-first font-medium text-sm">Call Us</p>
                <p className="text-first font-bold text-lg">1800 209 7979</p>
              </div>
            </div>

            {/* Divider - hidden on mobile */}
            <div className="hidden lg:block w-px bg-gray-300 h-16"></div>

            {/* Email Us */}
            <div className="flex items-center gap-4 sand">
              <MdOutlineEmail size={30} />
              <div>
                <p className="text-first text-sm ">Email Us At</p>
                <p className="text-first font-semibold text-lg">
                  rewiresupport@tatamotors.com
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-px bg-gray-300 h-16"></div>

          {/* Right Side - Get A Call Back Form */}
          <div className="flex ">
            <div className="rounded-lg   ">
              <h3 className="text-blue-900  font-semilight sand text-lg mb-2">
                Get A Call Back
              </h3>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="tel"
                  placeholder="9767XXXXXX"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex pl-4 pr-[200px] py-3 border  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500  text-xs focus:border-transparent placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-secondary -translate-x-10 rounded-full  text-white font-semilight px-8 sand py-1 transition-colors duration-200"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
