import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaCoins, FaVideo } from "react-icons/fa";

const HeroAno = () => {
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://www.cartakebackaust.com/wp-content/themes/cartakeback/images/home-hero-bg.svg')`,
      }}
    >
      <div className="flex items-center justify-between px-12 w-full max-w-7xl">
        {/* Left Section */}
        <div className="flex flex-col gap-1 max-w-xl sand">
          <div className="flex text-[#009CBC] text-xl">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} />
            ))}
          </div>
          <p className="font-bold">
            650+, 5 star reviews, over 8,000 vehicles purchased
          </p>
          <h1 className="font-bold text-5xl my-2 tagg">Cash for cars Scrap</h1>
          <p className="font-medium text-md text-gray-600">
            1800 Salvage will buy scrap cars for cash, no matter their
            condition. Undriveable, unregistered, or totally smashed, we will
            offer highly competitive prices and pay instant cash, too. Plus, our
            free scrap car removal service will tow away your scrap car the same
            day you book us! Fill out our easy form, and let’s get you cashed
            up.
          </p>
          <img
            className="w-[550px] mt-16"
            src="https://cdn.prod.website-files.com/5ecdf499680e63499d01741e/6729c01ad4904096b5af99de_toyota-corolla.webp"
            alt="Car"
          />
        </div>

        {/* Right Card Section */}
        <div className="bg-gray-200 text-black p-8 rounded-lg w-[400px] shadow-lg flex flex-col gap-4">
          <h2 className="text-2xl font-bold tagg">
            Easily sell your damaged car quickly, anytime.
          </h2>

          <div className="flex flex-col gap-3 sand">
            {/* Point 1 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#009CBC] text-white font-bold">
                1
              </div>
              <p className="text-md font-semibold">Get a price</p>
            </div>

            {/* Point 2 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#009CBC] text-white font-bold">
                2
              </div>
              <p className="text-md font-semibold">Sign digital paperwork</p>
            </div>

            {/* Point 3 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#009CBC] text-white font-bold">
                3
              </div>
              <p className="text-md font-semibold">Get paid & we pick up</p>
            </div>
          </div>

          <p className="text-sm mt-2 sand">
            We make selling your scrap car easy, quick, and stress-free. With
            top prices and same-day pickup, you're just one step away from cash
            in hand!
          </p>

          <div className="flex flex-col gap-2 mt-2">
            <div className="bg-[#76B82A] hover:bg-[#6ba727] hover:-translate-y-1 transition-all duration-300 rounded-lg flex gap-2 items-center justify-center text-white py-3 sand cursor-pointer text-md font-semibold">
              <FaCoins size={16} />
              <button>Get a price</button>
            </div>
            <div className="bg-[#009CBC] hover:bg-[#009CBC] hover:-translate-y-1 transition-all duration-300 rounded-lg flex gap-2 items-center justify-center sand text-white py-3 sand cursor-pointer text-md font-semibold">
              <FaVideo size={16} />
              <button>See how it works?</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAno;
