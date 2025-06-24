import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Will you buy car scrap metal?",
    answer: (
      <>
        <p className="mb-4">
          Yes — 1800 Salvage will buy scrap cars no matter their state. Even if
          your scrapper's a rusted red skeleton up on cinders, we will buy it.
        </p>
        <div className="bg-gradient-to-r from-[#152C85]/5 to-[#2C72D4]/5 rounded-lg p-4 mb-4">
          <p className="font-semibold text-[#152C85] mb-2">
            We accept vehicles with:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-[#152C85] to-[#2C72D4] rounded-full"></div>
              <span>Storm damage</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-[#152C85] to-[#2C72D4] rounded-full"></div>
              <span>Accident damage</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-[#152C85] to-[#2C72D4] rounded-full"></div>
              <span>Insurance write-offs</span>
            </li>
          </ul>
        </div>
        <p className="text-amber-600 font-medium">
          ⚠️ The only vehicles we cannot buy are flood-damaged ones.
        </p>
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
      "Sure, 1800 Salvage buys unregistered scrap vehicles all the time. A bit of advice: keep your scrap vehicle's license plates. Hand them in to your local road authority, and they'll reimburse you for them.",
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
    <section className="relative bg-gradient-to-br from-blue-50 to-slate-50 py-10 overflow-hidden">
      {/* Background Elements */}

      {/* Floating Elements */}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#0A0A5B] via-[#152C85] to-[#2C72D4] bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our scrap car buying
            service
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl border transition-all duration-500 hover:shadow-xl ${
                  isOpen
                    ? "border-[#2C72D4]/50 shadow-lg shadow-[#2C72D4]/10"
                    : "border-white/20 shadow-md hover:border-[#2C72D4]/30"
                }`}
              >
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#152C85]/10 to-[#2C72D4]/10 opacity-0 transition-opacity duration-500 ${
                    isOpen ? "opacity-100" : "group-hover:opacity-50"
                  }`}
                ></div>

                <button
                  onClick={() => toggleFAQ(index)}
                  className="relative w-full p-6 sm:px-8 sm:py-7 text-left flex items-center justify-between gap-4 z-10"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Question Number */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-r from-[#152C85] to-[#2C72D4] text-white"
                          : "bg-gray-100 text-[#152C85] group-hover:bg-gradient-to-r group-hover:from-[#152C85] group-hover:to-[#2C72D4] group-hover:text-white"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <h3 className="font-semibold text-lg sm:text-xl text-[#0A0A5B] group-hover:text-[#152C85] transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-gradient-to-r from-[#152C85] to-[#2C72D4] text-white rotate-180"
                        : "bg-gray-100 text-[#152C85] group-hover:bg-gradient-to-r group-hover:from-[#152C85] group-hover:to-[#2C72D4] group-hover:text-white"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="relative px-6 pb-6 sm:px-8 sm:pb-8">
                    {/* Content Separator */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2C72D4]/20 to-transparent mb-6"></div>

                    <div className="ml-12 text-gray-700 leading-relaxed space-y-3">
                      {faq.answer}
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div
                  className={`absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-[#152C85] to-[#2C72D4] rounded-full transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
};

export default Faqs;
