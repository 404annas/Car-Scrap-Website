import React, { useState } from "react";
import {
  MessageCircle,
  CheckCircle,
  XCircle,
  Car,
  Calendar,
  MapPin,
  Mail,
  Phone,
  ClipboardList,
  DollarSign,
} from "lucide-react";

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
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStatusMessage({ type: "", text: "" });
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

      setStatusMessage({ type: "success", text: "Message sent successfully!" });
      setFormData({
        // Clear form after successful submission
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
    } catch (error) {
      console.log("FAILED...", error);
      setStatusMessage({
        type: "error",
        text: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="touch"
      className="relative bg-gray-50 py-10 sm:py-12 overflow-hidden sand"
    >
      {/* Subtle Background Gradients */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#152C85] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#2C72D4] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#0A0A5B] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 sm:p-10 lg:p-12 transform transition-all duration-500 hover:scale-[1.005] hover:shadow-3xl">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#0A0A5B] via-[#152C85] to-[#2C72D4] bg-clip-text text-transparent mb-3 leading-tight">
              Get in touch for friendly advice
            </h2>
            <p className="text-md text-gray-600 max-w-xl mx-auto leading-relaxed">
              Whether you want to buy or sell salvage vehicles, we are here to
              help. Get in touch and we will get back to you soon.
            </p>
          </div>

          {/* Status Message */}
          {statusMessage.text && (
            <div
              className={`flex items-center justify-center p-3 mb-6 rounded-lg text-sm transition-all duration-300 transform ${
                statusMessage.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {statusMessage.type === "success" ? (
                <CheckCircle className="w-5 h-5 mr-2" />
              ) : (
                <XCircle className="w-5 h-5 mr-2" />
              )}
              {statusMessage.text}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Grid for two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Car Make */}
              <div className="relative group">
                <label
                  htmlFor="carMake"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <Car className="inline-block w-4 h-4 mr-2 text-[#152C85]" />
                  Car Make
                </label>
                <input
                  type="text"
                  name="carMake"
                  id="carMake"
                  value={formData.carMake}
                  onChange={handleInputChange}
                  placeholder="e.g., Toyota"
                  required
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2C72D4] focus:border-transparent transition duration-200 bg-white shadow-sm hover:shadow-md"
                />
              </div>
              {/* Car Model */}
              <div className="relative group">
                <label
                  htmlFor="carModel"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <Car className="inline-block w-4 h-4 mr-2 text-[#152C85]" />
                  Car Model
                </label>
                <input
                  type="text"
                  name="carModel"
                  id="carModel"
                  value={formData.carModel}
                  onChange={handleInputChange}
                  placeholder="e.g., Camry"
                  required
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2C72D4] focus:border-transparent transition duration-200 bg-white shadow-sm hover:shadow-md"
                />
              </div>
            </div>

            {/* Grid for two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Year Of Maintenance */}
              <div className="relative group">
                <label
                  htmlFor="yearOfMaintenance"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <Calendar className="inline-block w-4 h-4 mr-2 text-[#152C85]" />
                  Year of Maintenance
                </label>
                <input
                  type="text"
                  name="yearOfMaintenance"
                  id="yearOfMaintenance"
                  value={formData.yearOfMaintenance}
                  onChange={handleInputChange}
                  placeholder="e.g., 2020"
                  required
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2C72D4] focus:border-transparent transition duration-200 bg-white shadow-sm hover:shadow-md"
                />
              </div>
              {/* Suburb */}
              <div className="relative group">
                <label
                  htmlFor="suburb"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <MapPin className="inline-block w-4 h-4 mr-2 text-[#152C85]" />
                  Suburb
                </label>
                <input
                  type="text"
                  name="suburb"
                  id="suburb"
                  value={formData.suburb}
                  onChange={handleInputChange}
                  placeholder="e.g., Sydney"
                  required
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2C72D4] focus:border-transparent transition duration-200 bg-white shadow-sm hover:shadow-md"
                />
              </div>
            </div>

            {/* Grid for two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Email */}
              <div className="relative group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <Mail className="inline-block w-4 h-4 mr-2 text-[#152C85]" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  required
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2C72D4] focus:border-transparent transition duration-200 bg-white shadow-sm hover:shadow-md"
                />
              </div>
              {/* Phone No */}
              <div className="relative group">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <Phone className="inline-block w-4 h-4 mr-2 text-[#152C85]" />
                  Phone No
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g., 0412 345 678"
                  required
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2C72D4] focus:border-transparent transition duration-200 bg-white shadow-sm hover:shadow-md"
                />
              </div>
            </div>

            {/* Grid for two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Condition Dropdown */}
              <div className="relative group">
                <label
                  htmlFor="condition"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <ClipboardList className="inline-block w-4 h-4 mr-2 text-[#152C85]" />
                  Condition
                </label>
                <select
                  name="condition"
                  id="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2C72D4] focus:border-transparent transition duration-200 bg-white shadow-sm hover:shadow-md appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select Condition
                  </option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Poor">Poor</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 top-7">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {/* Expected Price */}
              <div className="relative group">
                <label
                  htmlFor="expectedPrice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <DollarSign className="inline-block w-4 h-4 mr-2 text-[#152C85]" />
                  Expected Price
                </label>
                <input
                  type="text"
                  name="expectedPrice"
                  id="expectedPrice"
                  value={formData.expectedPrice}
                  onChange={handleInputChange}
                  placeholder="e.g., $5000"
                  required
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2C72D4] focus:border-transparent transition duration-200 bg-white shadow-sm hover:shadow-md"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="relative group">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                <MessageCircle className="inline-block w-4 h-4 mr-2 text-[#152C85]" />
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4" // Reduced rows for a smaller look
                placeholder="Tell us more about your vehicle..."
                required
                className="w-full px-5 py-3 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2C72D4] focus:border-transparent transition duration-200 bg-white shadow-sm hover:shadow-md resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-2">
              <button
                type="submit" // Changed to type="submit" for form submission
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#152C85] to-[#2C72D4] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 ${
                  isSubmitting
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:scale-105"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
          {/* Decorative Image - Moved outside the form to maintain form's sleekness */}
          <img
            src="https://cdn.prod.website-files.com/5ecdf499680e63499d01741e/6285cbbd87566463e9be9b8d_1800-SALVAGE%20STILL%2002.webp"
            alt="1800 Salvage"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:left-16 sm:translate-x-0 w-40 sm:w-52 lg:w-72 object-contain z-10"
          />
        </div>
      </div>

      {/* Tailwind CSS Animation Keyframes and Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body {
            font-family: 'Inter', sans-serif;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9);
        }
        .animation-delay-2000 {
            animation-delay: 2s;
        }
        .animation-delay-4000 {
            animation-delay: 4s;
        }
        /* Custom styling for select dropdown arrow */
        select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-image: none; /* Remove default arrow */
        }
        /* Custom Tailwind utility for inner shadow - Removed as inputs now have outer shadow for a cleaner look */
        /* .shadow-inner-sm {
            box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        } */
      `}</style>
    </section>
  );
};

export default Contact;
