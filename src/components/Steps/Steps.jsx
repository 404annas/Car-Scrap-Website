const Steps = () => {
  return (
    <section className="relative py-10 px-4 sm:px-6 lg:px-12">
      {/* Man Image - hidden on small screens */}
      <img
        className="w-28 sm:w-36 absolute bottom-0 left-4 hidden sm:block"
        src="https://www.cartakebackaust.com/wp-content/uploads/2022/11/character-with-shadow.svg"
        alt="Man"
      />

      <div className="flex flex-col items-center gap-6 relative z-10">
        <h1 className="text-[#76B82A] text-2xl sm:text-3xl font-bold sand text-center leading-snug">
          Sell your scrap car for the best price
        </h1>

        <p className="text-gray-700 sand text-center max-w-[800px] text-base sm:text-lg">
          Across major cities in Australia, selling your scrap car with
          CarTakeBack can be done and dusted in just 3 easy steps:
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center my-12 gap-10 lg:gap-14">
          {/* Step 1 */}
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="flex gap-4 items-center">
              <img
                src="https://www.cartakebackaust.com/wp-content/uploads/2022/10/num1.svg"
                alt="1"
                className="w-4 sm:w-5 md:w-8"
              />
              <h1 className="sand text-lg sm:text-xl w-40 text-gray-800 font-bold">
                Get an instant scrap car quote
              </h1>
            </div>
            <p className="w-60 sand my-2 text-sm sm:text-base">
              Our online system shows you the best scrap price for your car
              instantly
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="flex gap-4 items-center">
              <img
                src="https://www.cartakebackaust.com/wp-content/uploads/2022/10/num2.svg"
                alt="2"
                className="w-10 sm:w-12 md:w-20"
              />
              <h1 className="sand text-lg sm:text-xl w-40 text-gray-800 font-bold">
                Arrange free car collection
              </h1>
            </div>
            <p className="w-60 sand my-2 text-sm sm:text-base">
              Our wreckers are ready to collect your car at a time to suit you
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="flex gap-4 items-center">
              <img
                src="https://www.cartakebackaust.com/wp-content/uploads/2022/10/num3.svg"
                alt="3"
                className="w-10 sm:w-12 md:w-20"
              />
              <h1 className="sand text-lg sm:text-xl w-40 text-gray-800 font-bold">
                Get cash in your bank!
              </h1>
            </div>
            <p className="w-60 sand my-2 text-sm sm:text-base">
              When your car is collected our local wrecker will arrange payment
              for it
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="flex flex-col gap-2 text-center max-w-[800px] sand text-sm sm:text-base">
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

        <p className="sand text-[#009CBC] font-semibold text-base sm:text-xl mt-6 cursor-pointer hover:underline">
          More about how it works {">"}
        </p>
      </div>
    </section>
  );
};

export default Steps;
