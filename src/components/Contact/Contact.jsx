import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    carMake: "",
    carModel: "",
    yearOfMaintenance: "",
    suburb: "",
    email: "",
    phone: "",
    condition: "",
    expectedPrice: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section id="touch" className="relative bg-white py-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#152C85] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#2C72D4] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 sm:p-10 lg:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl sand sm:text-5xl font-bold bg-gradient-to-r from-[#0A0A5B] via-[#152C85] to-[#2C72D4] bg-clip-text text-transparent mb-4">
              Get in touch for friendly advice
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Whether you want to buy or sell salvage vehicles, we are here to
              help. Get in touch and we will get back to you soon with the
              information you need.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  name="carMake"
                  value={formData.carMake}
                  onChange={handleInputChange}
                  placeholder="Car Make"
                  required
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2C72D4]/50 focus:border-[#2C72D4] transition-all duration-300 group-hover:border-gray-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#152C85]/5 to-[#2C72D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <div className="relative group">
                <input
                  type="text"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleInputChange}
                  placeholder="Car Model"
                  required
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2C72D4]/50 focus:border-[#2C72D4] transition-all duration-300 group-hover:border-gray-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#152C85]/5 to-[#2C72D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  name="yearOfMaintenance"
                  value={formData.yearOfMaintenance}
                  onChange={handleInputChange}
                  placeholder="Year Of Maintenance"
                  required
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2C72D4]/50 focus:border-[#2C72D4] transition-all duration-300 group-hover:border-gray-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#152C85]/5 to-[#2C72D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <div className="relative group">
                <input
                  type="text"
                  name="suburb"
                  value={formData.suburb}
                  onChange={handleInputChange}
                  placeholder="Suburb"
                  required
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2C72D4]/50 focus:border-[#2C72D4] transition-all duration-300 group-hover:border-gray-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#152C85]/5 to-[#2C72D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2C72D4]/50 focus:border-[#2C72D4] transition-all duration-300 group-hover:border-gray-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#152C85]/5 to-[#2C72D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone No"
                  required
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2C72D4]/50 focus:border-[#2C72D4] transition-all duration-300 group-hover:border-gray-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#152C85]/5 to-[#2C72D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Fourth Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2C72D4]/50 focus:border-[#2C72D4] transition-all duration-300 group-hover:border-gray-300 appearance-none cursor-pointer"
                >
                  <option value="">Select Condition</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Poor">Poor</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#152C85]/5 to-[#2C72D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <div className="relative group">
                <input
                  type="text"
                  name="expectedPrice"
                  value={formData.expectedPrice}
                  onChange={handleInputChange}
                  placeholder="Expected Price"
                  required
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2C72D4]/50 focus:border-[#2C72D4] transition-all duration-300 group-hover:border-gray-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#152C85]/5 to-[#2C72D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                placeholder="Your Message"
                required
                className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2C72D4]/50 focus:border-[#2C72D4] transition-all duration-300 group-hover:border-gray-300 resize-none"
              ></textarea>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#152C85]/5 to-[#2C72D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                onClick={handleSubmit}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#152C85] to-[#2C72D4] text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Image */}
        <img
          src="https://cdn.prod.website-files.com/5ecdf499680e63499d01741e/6285cbbd87566463e9be9b8d_1800-SALVAGE%20STILL%2002.webp"
          alt="1800 Salvage"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:left-16 sm:translate-x-0 w-40 sm:w-52 lg:w-72 object-contain z-10"
        />
      </div>
    </section>
  );
};

export default Contact;
