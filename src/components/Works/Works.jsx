import React from "react";

const Works = () => {
  return (
    <section className="bg-green-50 py-16 sm:py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8">
          {/* Card 1 */}
          <div className="relative bg-white pt-16 sm:pt-20 px-4 sm:px-6 py-6 flex flex-col items-center justify-start rounded-lg shadow hover:shadow-md transition h-auto">
            <img
              src="https://cdn-icons-png.flaticon.com/512/743/743008.png"
              alt="Scrap Car"
              className="w-16 sm:w-20 absolute -top-8 sm:-top-10"
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl text-[#76B82A] font-bold mb-2 text-center tagg">
              Scrap a car near you
            </h2>
            <p className="text-gray-600 font-medium text-center sand text-sm sm:text-base">
              Scrap your car for a cash deposit, using a car scrapping and
              collection service in your local area.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white pt-16 sm:pt-20 px-4 sm:px-6 py-6 flex flex-col items-center justify-start rounded-lg shadow hover:shadow-md transition h-auto">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4205/4205906.png"
              alt="How it works"
              className="w-16 sm:w-20 absolute -top-8 sm:-top-10"
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl text-[#76B82A] font-bold mb-2 text-center tagg">
              How it works?
            </h2>
            <p className="text-gray-600 font-medium text-center sand text-sm sm:text-base">
              Find out why so many people say Scrap My Car, and how easy the
              quote and collection process is.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white pt-16 sm:pt-20 px-4 sm:px-6 py-6 flex flex-col items-center justify-start rounded-lg shadow hover:shadow-md transition h-auto">
            <img
              src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
              alt="UK wide service"
              className="w-16 sm:w-20 absolute -top-8 sm:-top-10"
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl text-[#76B82A] font-bold mb-2 text-center tagg">
              UK wide service
            </h2>
            <p className="text-gray-600 font-medium text-center sand text-sm sm:text-base">
              We offer free collection of Scrap cars throughout the UK. Get the
              best priced instant quote in your area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
