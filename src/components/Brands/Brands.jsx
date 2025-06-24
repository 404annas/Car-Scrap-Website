import Brand1 from "../../assets/Brand1.webp";
import Brand2 from "../../assets/Brand2.png";
import Brand3 from "../../assets/Brand3.png";
import Brand4 from "../../assets/Brand4.webp";
import Brand5 from "../../assets/Brand5.png";
import Brand6 from "../../assets/Brand6.webp";
import Brand7 from "../../assets/Brand7.png";
import Brand8 from "../../assets/Brand8.png";
import Brand9 from "../../assets/Brand9.webp";
import Brand10 from "../../assets/Brand10.webp";

const brandImages = [
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
  Brand7,
  Brand8,
  Brand9,
  Brand10,
];

const Brands = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-10 overflow-hidden">
      {/* Background Elements */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sand sm:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-[#0A0A5B] via-[#152C85] to-[#2C72D4] bg-clip-text text-transparent mb-6 leading-tight">
            We buy scrap cars of all makes and models
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#152C85] to-[#2C72D4] mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Foreign, national, out-of-production, rare, or common — it makes no
            difference.
            <span className="font-semibold text-[#152C85]">
              {" "}
              If you have a scrap car to sell, we have the cash to buy it.
            </span>
          </p>
        </div>

        {/* Brands Grid */}
        <div className="relative">
          {/* Grid Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-6 gap-4 h-full">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border border-[#2C72D4] rounded"></div>
              ))}
            </div>
          </div>

          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
            {brandImages.map((brand, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-[#2C72D4]/30"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#152C85]/10 to-[#2C72D4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Brand Image Container */}
                <div className="relative flex items-center justify-center h-16 sm:h-20">
                  <img
                    src={brand}
                    alt={`Brand ${index + 1}`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-[#152C85] to-[#2C72D4] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-[#2C72D4] to-[#152C85] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#152C85] to-[#2C72D4] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <span>Get Your Quote Today</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
