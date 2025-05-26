import React from "react";

const Works = () => {
  return (
    <section className="bg-green-50 py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative bg-white pt-20 p-6 h-72 flex flex-col items-center justify-start rounded-lg shadow hover:shadow-md transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/743/743008.png"
              alt="Scrap Car"
              className="w-20 absolute -top-10"
            />
            <h2 className="text-3xl text-[#76B82A] font-bold mb-2 text-center tagg">
              Scrap a car near you
            </h2>
            <p className="text-gray-600 font-medium text-center sand">
              Scrap your car for a cash deposit, using a car scrapping and
              collection service in your local area.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white pt-20 p-6 h-72 flex flex-col items-center justify-start rounded-lg shadow hover:shadow-md transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4205/4205906.png"
              alt="How it works"
              className="w-20 absolute -top-10"
            />
            <h2 className="text-3xl text-[#76B82A] font-bold mb-2 text-center tagg">
              How it works?
            </h2>
            <p className="text-gray-600 font-medium text-center sand">
              Find out why so many people say Scrap My Car, and how easy the
              quote and collection process is.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white pt-20 p-6 h-72 flex flex-col items-center justify-start rounded-lg shadow hover:shadow-md transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
              alt="UK wide service"
              className="w-20 absolute -top-10"
            />
            <h2 className="text-3xl text-[#76B82A] font-bold mb-2 text-center tagg">
              UK wide service
            </h2>
            <p className="text-gray-600 font-medium text-center sand">
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
