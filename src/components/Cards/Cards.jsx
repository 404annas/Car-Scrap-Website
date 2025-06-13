import React, { useState } from "react";
import { FaDollarSign, FaTruck, FaRecycle, FaTasks } from "react-icons/fa";

const Cards = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cardData = [
    {
      id: 1,
      icon: <FaDollarSign size={20} />,
      title: "When it comes to car scrapping, we offer the best prices.",
      content: `Wondering how to get the best price when scrapping your car? No problem. With a network of dealers spanning across the entire country, at Scrap Car Network we guarantee to get you the best price, no matter where you are in the UK. It’s simple: just enter your car reg and postcode, and get an instant online quote with the best price. No paperwork, no fuss.

Once you’ve scrapped your car with us you get a Certificate of Destruction after which the DVLA can refund you any unused road tax. Now that’s value for money! To get a better idea of how much you’ll get when you sell your vehicle, click here to see our price guide.`,
    },
    {
      id: 2,
      icon: <FaTruck size={20} />,
      title: "We provide FREE collection of scrap cars!",
      content: `We make things easier for you here at Scrap Car Network, with free collection nationwide of your old car. It’s the perfect option if your End Of Life vehicle isn’t running, or if it doesn’t have tax, insurance or MOT. Simply pick your time slot and we’ll do the rest!

One of our fleet of collection vehicles will swing by to pick up your unwanted car - as long as it rolls, you don’t even have to have the keys. Logbook (V5C) missing? Not to worry! We can scrap your car without it!

We don’t like to keep you waiting, so we’ll finalise your payment upon collection, and then you’ll get paid only days later. That’s why we’re rated Excellent based on over 8000 customer reviews.`,
    },
    {
      id: 3,
      icon: <FaRecycle size={20} />,
      title: "We ensure that your car is either re-used or recycled.",
      content: `Selling your car to us means you’re helping to improve lives. We actively support and sustain the charitable activities of Recycling Lives UK, often providing training and work placements to vulnerable people in their care, helping them learn skills to get back into stable employment and permanent accommodation.

We also take care to stay green when we scrap your vehicle. Car recycling is a key part of our service here at Scrap Car Network. UK law says at least 95% of every car must be effectively recycled, but our goal is to go one step further. Our aim is to divert 100% of vehicle waste from going to landfill, so that every part of your car is reused. When you sell your car to us, you’re helping us work towards that goal!`,
    },
    {
      id: 4,
      icon: <FaTasks size={20} />,
      title: "We process and provide official paperwork for you.",
      content: `We make it simple for you at Scrap Car Network. We know how confusing and frustrating endless paperwork can be when scrapping your car, so we make sure to handle as much of that as possible. All we need are a few quick details from you, and then we’ll take it from there.

• We’ll contact the DVLA on your behalf, freeing you from legal responsibility from the car, and making sure they refund you an unused road tax you’re entitled to.
• We’ll provide you with a Certificate of Destruction, a legal document that proves your car has been properly disposed of.

We’ll pay the cash directly into your bank account, so you can see when you’ve been paid. Don’t worry if you’ve lost your logbook (V5C) - we can scrap your car without it.`,
    },
  ];

  const defaultText = `
We operate one of the biggest scrap car collection services in the UK. Our commercial activities also help sustain the Recycling Lives charity.

Simply enter your car reg number and a few details about the car you want to scrap to get an instant price and no obligation quote. If you’re happy with the price we offer you, we’ll arrange a completely free collection, as well as handle all of the paperwork for you.

No matter where you are in the UK or what condition your car is in – we’ll pick it up, take it away and recycle it – paying you a great price for it! We buy any make of car for cash!

We’re a UK-wide service for scrapping cars, damaged cars and salvaged cars as well as motorbikes, vans and commercial vehicles. Being a social business, we’re unique! Alternatively, if you want to donate, rather than scrap a car for cash, to support a local charity - please visit Car Donation Network.
`;

  return (
    <div className="flex flex-col md:flex-row w-full bg-[#EEFAFC] py-10 sand">
      {/* Cards Column */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 px-4 md:px-6 mb-8 md:mb-0">
        {cardData.map((card) => (
          <div
            key={card.id}
            onMouseEnter={() => setActiveCard(card.id)}
            className="flex items-start gap-3 bg-[#009CBC] text-white p-4 rounded-lg cursor-pointer transition-all duration-300"
          >
            <div className="mt-1">{card.icon}</div>
            <h2 className="text-sm md:text-lg font-semibold">{card.title}</h2>
          </div>
        ))}
      </div>

      {/* Dynamic Text Column */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-6 text-black font-medium">
        <p className="text-sm md:text-base max-w-xl whitespace-pre-line leading-relaxed text-justify font-medium">
          {activeCard
            ? cardData.find((card) => card.id === activeCard).content
            : defaultText}
        </p>
      </div>
    </div>
  );
};

export default Cards;
