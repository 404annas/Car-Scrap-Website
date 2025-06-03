import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const faqData = [
  {
    question: "Will you buy car scrap metal?",
    answer: (
      <>
        <p>
          Yes — 1800 Salvage will buy scrap cars no matter their state. Even if
          your scrapper’s a rusted red skeleton up on cinders, we will buy it.
        </p>
        <ul className="list-disc pl-5 my-2 text-gray-700">
          <li>Storm damage</li>
          <li>Accident damage</li>
          <li>Insurance write-offs</li>
        </ul>
        <p>The only vehicles we cannot buy are flood-damaged ones.</p>
      </>
    ),
  },
  {
    question: "Does 1800 Salvage actually pay cash?",
    answer:
      "Unfortunately, we do not pay cash in hand — but that is an industry regulation. As a reputable scrap car salvage service, we abide by all government standards while still providing the best service around. 1800 Salvage will deposit your payment into a bank account of your choosing. Your payment will arrive instantly or within 24 hours, depending on your bank.",
  },
  {
    question: "Will you buy a scrap car if it is unregistered?",
    answer:
      "Sure, 1800 Salvage buys unregistered scrap vehicles all the time. A bit of advice: keep your scrap vehicle’s license plates. Hand them in to your local road authority, and they’ll reimburse you for them.",
  },
  {
    question: "Can you tow my scrap vehicle from regional areas in Australia?",
    answer:
      "Absolutely. Not only does our tow team service regional areas, but we can also still offer their 24 turn-around, too.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 sand">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#76B82A]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-300 rounded-xl px-4 py-5 sm:px-6 sm:py-6 text-left transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start sm:items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <FiPlus
                      className={`text-2xl text-blue-500 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    />
                    <span className="font-semibold text-base sm:text-lg text-gray-800">
                      {faq.question}
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pl-9 sm:pl-11 text-sm sm:text-base text-gray-700 font-medium space-y-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
