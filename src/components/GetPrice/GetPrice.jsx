import React from "react";

const GetPrice = () => {
  return (
    <section className="bg-blue-50 flex items-center justify-center py-16">
      <div className="flex flex-col gap-4">
        <h1 className="sand font-extrabold text-4xl text-center">
          Get the <span className="text-[#76B82A] tagg">best price</span> for your
          scrap car.
        </h1>
        <div className="flex gap-4 my-6">
          <div className="flex border-2 border-gray-800 rounded-lg">
            <img
              className="bg-[#009CBC] p-1 w-8 rounded"
              src="https://www.scrapcarnetwork.org/images/GB.svg"
              alt=""
            />
            <input
              className="bg-transparent sand text-center outline-none text-xl font-bold px-10 py-4"
              placeholder="Vehicle Registration"
              type="text"
            />
          </div>
          <div className="flex border-2 border-gray-800 rounded-lg">
            <img
              className="bg-[#009CBC] p-1 w-8 rounded"
              src="https://www.scrapcarnetwork.org/images/Pin-Small.svg"
              alt=""
            />
            <input
              className="bg-transparent sand text-center outline-none text-xl font-bold px-10 py-4"
              placeholder="PostCode"
              type="text"
            />
          </div>
        </div>
        <button className="bg-[#76B82A] hover:bg-[#6ba727] transition-all text-white sand font-bold px-10 py-4 text-2xl rounded-lg w-[350px] mx-auto">
          Get Quote
        </button>
        <p className="text-lg text-gray-700 text-center sand font-semibold mt-4">
          Join the thousands saying scrap my car with Scrap Car Network
        </p>
      </div>
    </section>
  );
};

export default GetPrice;
