import Brand1 from "../../assets/Brand1.webp";
import Brand2 from "../../assets/Brand2.webp";
import Brand3 from "../../assets/Brand3.webp";
import Brand4 from "../../assets/Brand4.webp";
import Brand5 from "../../assets/Brand5.webp";
import Brand6 from "../../assets/Brand6.webp";
import Brand7 from "../../assets/Brand7.webp";
import Brand8 from "../../assets/Brand8.webp";
import Brand9 from "../../assets/Brand9.webp";
import Brand10 from "../../assets/Brand10.webp";
import Brand11 from "../../assets/Brand11.webp";
import Brand12 from "../../assets/Brand12.webp";
import Brand13 from "../../assets/Brand13.webp";
import Brand14 from "../../assets/Brand14.webp";
import Brand15 from "../../assets/Brand15.webp";
import Brand16 from "../../assets/Brand16.webp";
import Brand17 from "../../assets/Brand17.webp";
import Brand18 from "../../assets/Brand18.webp";
import Brand19 from "../../assets/Brand19.webp";
import Brand20 from "../../assets/Brand20.webp";
import Brand21 from "../../assets/Brand21.webp";
import Brand22 from "../../assets/Brand22.webp";
import Brand23 from "../../assets/Brand23.webp";
import Brand24 from "../../assets/Brand24.webp";
import Brand25 from "../../assets/Brand25.webp";
import Brand26 from "../../assets/Brand26.webp";
import Brand27 from "../../assets/Brand27.webp";
import Brand28 from "../../assets/Brand28.webp";
import Brand29 from "../../assets/Brand29.webp";
import Brand30 from "../../assets/Brand30.webp";
import Brand31 from "../../assets/Brand31.webp";
import Brand32 from "../../assets/Brand32.webp";
import Brand33 from "../../assets/Brand33.webp";
import Brand34 from "../../assets/Brand34.webp";
import Brand35 from "../../assets/Brand35.webp";
import Brand36 from "../../assets/Brand36.webp";
import Brand37 from "../../assets/Brand37.webp";
import Brand38 from "../../assets/Brand38.webp";
import Brand39 from "../../assets/Brand39.webp";
import Brand40 from "../../assets/Brand40.webp";
import Brand41 from "../../assets/Brand41.webp";
import Brand42 from "../../assets/Brand42.webp";
import Brand43 from "../../assets/Brand43.webp";
import Brand44 from "../../assets/Brand44.webp";
import Brand45 from "../../assets/Brand45.webp";
import Brand46 from "../../assets/Brand46.webp";
import Brand47 from "../../assets/Brand47.webp";
import Brand48 from "../../assets/Brand48.webp";

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
  Brand11,
  Brand12,
  Brand13,
  Brand14,
  Brand15,
  Brand16,
  Brand17,
  Brand18,
  Brand19,
  Brand20,
  Brand21,
  Brand22,
  Brand23,
  Brand24,
  Brand25,
  Brand26,
  Brand27,
  Brand28,
  Brand29,
  Brand30,
  Brand31,
  Brand32,
  Brand33,
  Brand34,
  Brand35,
  Brand36,
  Brand37,
  Brand38,
  Brand39,
  Brand40,
  Brand41,
  Brand42,
  Brand43,
  Brand44,
  Brand45,
  Brand46,
  Brand47,
  Brand48,
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 px-4 sm:px-8 md:px-12 lg:px-20 mt-10">
        {brandImages.map((brand, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={brand}
              alt={`Brand ${index + 1}`}
              className="w-full max-w-[250px] object-contain border border-[#4db5c7] p-2 rounded-md cursor-pointer hover:opacity-80 transition-all duration-200"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
