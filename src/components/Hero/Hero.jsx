import { FaCoins, FaVideo } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[499px] mt-16 lg:mt-0 bg-[#EEFAFC] flex items-center justify-center py-10 lg:pl-4 pl-0">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        {/* Left Card */}
        <div className="bg-white/90 text-black p-6 rounded-lg w-full max-w-md shadow-xl flex flex-col gap-4">
          <h2 className="text-xl lg:text-2xl font-bold sand">
            Easily sell your damaged car quickly, anytime.
          </h2>

          <div className="flex flex-col gap-3 sand">
            {[
              "Get a price",
              "Sign digital paperwork",
              "Get paid & we pick up",
            ].map((step, index) => (
              <div className="flex items-center gap-3" key={index}>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#009CBC] text-white font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold">{step}</p>
              </div>
            ))}
          </div>

          <p className="text-sm mt-2 sand">
            We make selling your scrap car easy, quick, and stress-free. With
            top prices and same-day pickup, you're just one step away from cash
            in hand!
          </p>

          <div className="flex flex-col gap-3 mt-2">
            <a href="#touch">
              <button className="bg-[#76B82A] hover:bg-[#6ba727] w-full hover:-translate-y-1 transition-all duration-300 rounded-lg flex gap-2 items-center justify-center text-white py-3 sand text-sm font-semibold">
                <FaCoins size={16} />
                Get a price
              </button>
            </a>
            <button className="bg-[#009CBC] hover:bg-[#007da3] hover:-translate-y-1 transition-all duration-300 rounded-lg flex gap-2 items-center justify-center sand text-white py-3 sand text-sm font-semibold">
              <FaVideo size={16} />
              See how it works?
            </button>
          </div>
        </div>

        {/* Center Text */}
        <div className="text-center px-4 w-full max-w-md">
          <h1 className="text-2xl lg:text-3xl font-bold mb-2 sand text-[#76B82A]">
            Looking to scrap your car?
          </h1>
          <p className="text-gray-700 sand mt-4">
            Simply enter your car details and postcode to see how much you can
            get for your scrap car!
          </p>
          <button
            className="sand font-bold bg-[#009CBC] hover:bg-[#32a4bb] transition-all px-6 py-3 mt-6 rounded-lg text-white w-full max-w-xs mx-auto"
            style={{ boxShadow: "5px 5px 0 #76B82A" }}
          >
            Get Quote
          </button>
          <img
            className="w-24 mx-auto mt-4"
            src="https://www.cartakebackaust.com/wp-content/themes/cartakeback/images/highly-rated-five-stars.svg"
            alt="Rating"
          />
        </div>

        {/* Right Image */}
        <img
          src="https://www.cartakebackaust.com/wp-content/uploads/2023/10/illustration-right-au.svg"
          alt="Right Illustration"
          className="w-full max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
