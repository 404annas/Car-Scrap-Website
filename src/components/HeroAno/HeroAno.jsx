import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaCoins, FaVideo } from "react-icons/fa";

const HeroAno = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-12"
      style={{
        backgroundImage: `url('https://www.cartakebackaust.com/wp-content/themes/cartakeback/images/home-hero-bg.svg')`,
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8 py-12">
        {/* Left Section */}
        <div className="flex flex-col gap-2 max-w-2xl w-full">
          <div className="flex text-[#009CBC] text-xl">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} />
            ))}
          </div>
          <p className="font-bold sand text-sm sm:text-base">
            650+, 5 star reviews, over 8,000 vehicles purchased
          </p>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl my-2 tagg">
            Cash for cars Scrap
          </h1>
          <p className="font-medium sand text-sm sm:text-base text-gray-600">
            1800 Salvage will buy scrap cars for cash, no matter their
            condition. Undriveable, unregistered, or totally smashed, we will
            offer highly competitive prices and pay instant cash, too. Plus, our
            free scrap car removal service will tow away your scrap car the same
            day you book us! Fill out our easy form, and let’s get you cashed
            up.
          </p>
          <img
            className="w-full max-w-md sm:max-w-lg md:max-w-xl mt-6 sm:mt-10"
            src="https://cdn.prod.website-files.com/5ecdf499680e63499d01741e/6729c01ad4904096b5af99de_toyota-corolla.webp"
            alt="Car"
          />
        </div>

        {/* Right Card Section */}
        <div className="bg-white/90 text-black p-6 sm:p-8 rounded-lg w-full max-w-md shadow-xl flex flex-col gap-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold tagg">
            Easily sell your damaged car quickly, anytime.
          </h2>

          <div className="flex flex-col gap-2 sand">
            {[
              "Get a price",
              "Sign digital paperwork",
              "Get paid & we pick up",
            ].map((step, index) => (
              <div className="flex items-center gap-3" key={index}>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#009CBC] text-white font-bold text-sm sm:text-base">
                  {index + 1}
                </div>
                <p className="text-sm sm:text-base md:text-lg font-semibold">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm md:text-base mt-2 sand">
            We make selling your scrap car easy, quick, and stress-free. With
            top prices and same-day pickup, you're just one step away from cash
            in hand!
          </p>

          <div className="flex flex-col gap-3 mt-2">
            <button className="bg-[#76B82A] hover:bg-[#6ba727] hover:-translate-y-1 transition-all duration-300 rounded-lg flex gap-2 items-center justify-center text-white py-3 sand text-sm sm:text-base font-semibold">
              <FaCoins size={16} />
              Get a price
            </button>
            <button className="bg-[#009CBC] hover:bg-[#007da3] hover:-translate-y-1 transition-all duration-300 rounded-lg flex gap-2 items-center justify-center sand text-white py-3 sand text-sm sm:text-base font-semibold">
              <FaVideo size={16} />
              See how it works?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAno;
