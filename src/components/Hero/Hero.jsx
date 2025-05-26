import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[499px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://www.cartakebackaust.com/wp-content/themes/cartakeback/images/home-hero-bg.svg')`,
      }}
    >
      <div className="w-full flex items-center justify-between">
        <img
          src="https://www.cartakebackaust.com/wp-content/uploads/2024/02/Homepage-Hero-Left-AU.svg"
          alt="Left"
          className="w-[500px] object-contain pl-6"
        />

        <div className="text-center px-4 w-[300px]">
          <h1 className="text-4xl font-bold mb-2 tagg text-[#76B82A]">
            Looking to scrap your car?
          </h1>
          <p className="text-gray-700 sand mt-8">
            Simply enter your car details and postcode to see how much you can
            get for your scrap car!
          </p>
          <button
            className="sand font-bold bg-[#009CBC] hover:bg-[#32a4bb] transition-all px-4 py-2 my-4 w-[250px] rounded-lg text-white"
            style={{
              boxShadow: "5px 5px 0 #76B82A",
            }}
          >
            Get Quote
          </button>
          <img
            className="w-32 mx-auto"
            src="https://www.cartakebackaust.com/wp-content/themes/cartakeback/images/highly-rated-five-stars.svg"
            alt="Rating"
          />
        </div>

        <img
          src="https://www.cartakebackaust.com/wp-content/uploads/2023/10/illustration-right-au.svg"
          alt="Right"
          className="w-[500px] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
