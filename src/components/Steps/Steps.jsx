import React from "react";

const Steps = () => {
  return (
    <section className="relative py-10">
      <img
        className="w-36 absolute bottom-0 left-4"
        src="https://www.cartakebackaust.com/wp-content/uploads/2022/11/character-with-shadow.svg"
        alt="Man"
      />

      <div className="flex flex-col items-center gap-6 relative z-10">
        <h1 className="text-[#76B82A] text-3xl tagg text-center">
          Sell your scrap car for the best price
        </h1>
        <p className="text-gray-700 sand text-center max-w-[800px]">
          Across major cities in Australia, selling your scrap car with
          CarTakeBack can be done and dusted in just 3 easy steps:
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center my-14 gap-14">
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="flex gap-4 items-center">
              <img
                src="https://www.cartakebackaust.com/wp-content/uploads/2022/10/num1.svg"
                alt="1"
              />
              <h1 className="tagg text-xl w-40 text-gray-800 font-bold">
                Get an instant scrap car quote
              </h1>
            </div>
            <p className="w-60 sand my-2">
              Our online system shows you the best scrap price for your car
              instantly
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center text-center">
            <div className="flex gap-4 items-center">
              <img
                src="https://www.cartakebackaust.com/wp-content/uploads/2022/10/num2.svg"
                alt="2"
              />
              <h1 className="tagg text-xl w-40 text-gray-800 font-bold">
                Arrange free car collection
              </h1>
            </div>
            <p className="w-60 sand my-2">
              Our wreckers are ready to collect your car at a time to suit you
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center text-center">
            <div className="flex gap-4 items-center">
              <img
                src="https://www.cartakebackaust.com/wp-content/uploads/2022/10/num3.svg"
                alt="3"
              />
              <h1 className="tagg text-xl w-40 text-gray-800 font-bold">
                Get cash in your bank!
              </h1>
            </div>
            <p className="w-60 sand my-2">
              When your car is collected our local wrecker will arrange payment
              for it
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-center max-w-[800px] sand">
          <p>
            It’s as simple as that! Plus, your quote is guaranteed for seven
            days, giving you time to think about it.
          </p>
          <p>
            When you get a quote you’ll also get the option to upload photos,
            which if you do, could mean you get a better price for your car!
          </p>
          <p>
            Our Customer Service team is on hand to help with any questions you
            have along the way.
          </p>
        </div>

        <p className="tagg text-[#009CBC] text-xl mt-6 cursor-pointer">
          More about how it works {">"}
        </p>
      </div>
    </section>
  );
};

export default Steps;
