import Brand1 from "../../assets/Brand1.webp";
import Brand2 from "../../assets/Brand2.png";
import Brand3 from "../../assets/Brand3.png";
import Brand4 from "../../assets/Brand4.webp";
import Brand5 from "../../assets/Brand5.png";
import Brand6 from "../../assets/Brand6.webp";
import Brand7 from "../../assets/Brand7.png";
import Brand8 from "../../assets/Brand8.png";
import Brand9 from "../../assets/Brand9.webp";

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
];

const Brands = () => {
  return (
    <section className="bg-[#EEFAFC] py-10">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center gap-3 px-4 sand">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#76B82A]">
          We buy scrap cars of all makes and models
        </h1>
        <p className="text-center text-sm md:text-base text-gray-700 max-w-xl px-2 sm:px-4">
          Foreign, national, out-of-production, rare, common — it makes no
          difference. If you have a scrap car to sell, we have the cash to buy
          it.
        </p>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-4 gap-2 sm:px-8 md:px-12 lg:px-20 mt-10">
        {brandImages.map((brand, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={brand}
              alt={`Brand ${index + 1}`}
              className="w-[70px] md:w-[80px] max-w-[100px] object-contain cursor-pointer hover:opacity-80 transition-all duration-200"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
