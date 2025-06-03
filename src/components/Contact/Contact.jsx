import { FiMessageCircle } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 px-4 sand">
      <div className="max-w-5xl mx-auto bg-gray-100 rounded-xl shadow-md p-6 sm:p-8 md:p-10 text-center relative">
        {/* Icon */}
        <FiMessageCircle className="text-4xl sm:text-5xl text-blue-500 mx-auto mb-4" />

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#76B82A]">
          Get in touch for friendly advice
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 mx-auto text-sm sm:text-base md:text-lg max-w-xl px-2 sm:px-4">
          Whether you want to buy or sell salvage vehicles, we are here to help. Get in touch and we will get back to you soon with the information you need.
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Name, Email, Password */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 text-sm sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 text-sm sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 text-sm sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Textarea */}
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-2 text-sm sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#76B82A] hover:bg-[#6ba727] hover:-translate-y-1 transition-all duration-300 text-white font-semibold text-sm sm:text-base py-2 px-6 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Decorative Image */}
      <img
        src="https://cdn.prod.website-files.com/5ecdf499680e63499d01741e/6285cbbd87566463e9be9b8d_1800-SALVAGE%20STILL%2002.webp"
        alt="1800 Salvage"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:left-16 sm:translate-x-0 w-40 sm:w-52 lg:w-72 object-contain z-10"
      />
    </section>
  );
};

export default Contact;
