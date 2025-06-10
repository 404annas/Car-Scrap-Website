import WorkPic1 from "../../assets/WorkPic1.svg";
import WorkPic2 from "../../assets/WorkPic2.svg";
import WorkPic3 from "../../assets/WorkPic3.svg";

const Works = () => {
  return (
    <section className="bg-[#EEFAFC] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-10">
          {/* Card Template */}
          {[
            {
              img: WorkPic2,
              title: "Scrap a car near you",
              desc: "Scrap your car for a cash deposit, using a car scrapping and collection service in your local area.",
            },
            {
              img: WorkPic1,
              title: "How it works?",
              desc: "Find out why so many people say Scrap My Car, and how easy the quote and collection process is.",
            },
            {
              img: WorkPic3,
              title: "SYDNEY wide service",
              desc: "We offer free collection of Scrap cars throughout the UK. Get the best priced instant quote in your area.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="relative bg-white pt-20 px-4 sm:px-6 pb-6 flex flex-col items-center text-center rounded-lg shadow hover:shadow-lg transition-all duration-300"
            >
              <img
                src={card.img}
                alt={card.title}
                className="absolute w-36 md:w-40 lg:w-48 -top-10 sm:-top-12"
              />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#76B82A] mb-3 sand">
                {card.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-medium sand">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
