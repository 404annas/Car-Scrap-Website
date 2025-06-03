import React from "react";

const GetPrice = () => {
  return (
    <section className="bg-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col gap-6 w-full max-w-4xl">
        {/* Heading */}
        <h1 className="sand font-extrabold text-2xl sm:text-3xl md:text-4xl text-center leading-snug">
          Get the <span className="text-[#76B82A] sand">best price</span> for your scrap car.
        </h1>

        {/* Form Inputs */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          {/* Vehicle Registration Input */}
          <div className="flex items-center border-2 border-gray-800 rounded-lg w-full">
            <img
              className="bg-[#009CBC] p-1 w-6 sm:w-8 md:w-8 sm:h-16 h-12 aspect-square rounded-l"
              src="https://www.scrapcarnetwork.org/images/GB.svg"
              alt="GB"
            />
            <input
              className="bg-transparent sand text-center outline-none text-sm sm:text-base md:text-lg font-bold px-4 py-3 w-full"
              placeholder="Vehicle Registration"
              type="text"
            />
          </div>

          {/* Postcode Input */}
          <div className="flex items-center border-2 border-gray-800 rounded-lg w-full">
            <img
              className="bg-[#009CBC] p-1 w-6 sm:w-8 md:w-8 sm:h-16 h-12 aspect-square rounded-l"
              src="https://www.scrapcarnetwork.org/images/Pin-Small.svg"
              alt="Pin"
            />
            <input
              className="bg-transparent sand text-center outline-none text-sm sm:text-base md:text-lg font-bold px-4 py-3 w-full"
              placeholder="PostCode"
              type="text"
            />
          </div>
        </div>

        {/* Get Quote Button */}
        <button className="bg-[#76B82A] hover:bg-[#6ba727] transition-all text-white sand font-bold px-6 py-3 text-base sm:text-lg md:text-2xl rounded-lg w-full sm:w-[300px] md:w-[350px] mx-auto">
          Get Quote
        </button>

        {/* Footer Text */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center sand font-semibold">
          Join the thousands saying scrap my car with Scrap Car Network
        </p>
      </div>
    </section>
  );
};

export default GetPrice;
