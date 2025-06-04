import MapImage from "../../assets/MappImage.png";

const Map = () => {
  return (
    <section className="relative w-full sand">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center pt-8 text-[#009CBC] sand">
        Sell your scrap cars for top prices from anywhere in Australia
      </h1>

      {/* Map Image */}
      <img
        src={MapImage}
        alt="City Map"
        className="w-[90%] sm:w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] object-cover"
      />
    </section>
  );
};

export default Map;
