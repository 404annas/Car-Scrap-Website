import MapImage from "../../assets/MapImage3.png";

// const locations = [
//   { name: "North Shore", top: "33.8%", left: "41%" },
//   { name: "Sutherland Shire", top: "21.3%", left: "56%" },
//   { name: "Surry Hills", top: "79.5%", left: "59.6%" },
//   { name: "Cronulla", top: "37.5%", left: "56.8%" },
//   { name: "Guildford", top: "81.5%", left: "52%" },
//   { name: "Penrith", top: "40%", left: "63%" },
//   { name: "Hills District", top: "47.4%", left: "49.6%" },
//   { name: "Blue Mountains", top: "58.5%", left: "44.8%" },
//   { name: "Wetherill Park", top: "68.4%", left: "51.1%" },
//   { name: "Rockdale", top: "72.8%", left: "45.8%" },
//   { name: "Prospect", top: "51%", left: "60%" },
//   { name: "Sydney", top: "62.5%", left: "62.4%" },
//   { name: "Hurstville", top: "85%", left: "40.4%" },
//   { name: "Villawood", top: "32.3%", left: "50.29%" },
//   { name: "Burwood", top: "27.2%", left: "46.2%" },
//   { name: "Carlton", top: "73%", left: "36.9%" },
//   { name: "Melbourne", top: "61.3%", left: "55.6%" }
// ];

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
        className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] object-cover px-2"
      />
    </section>
  );
};

export default Map;
