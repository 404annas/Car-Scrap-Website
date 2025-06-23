import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SiVorondesign } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi2";
import { SiNintendogamecube } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import hook from "../../assets/hook.webp";
import "./CustomSection.css";
import { motion } from "framer-motion";
const CustomSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const divRefs = useRef([]);

  const divs = [
    {
      icon: <HiDocumentText />,
      title: "Discovery & Requirement Gathering",
      text: "We start by deeply understanding your vision, goals, and target audience to lay a solid foundation for your project.",
    },
    {
      icon: <SiNintendogamecube />,
      title: "Strategic Planning & Prototyping",
      text: "We translate insights into actionable plans, outlining features, technologies, and creating interactive prototypes.",
    },
    {
      icon: <MdDeveloperMode />,
      title: "Agile Development & Iteration",
      text: "Our team builds your product using agile methodologies, ensuring flexibility, collaboration, and continuous improvement.",
    },
    {
      icon: <SiVorondesign />,
      title: "Deployment & Beyond",
      text: "We launch your product, providing ongoing support and maintenance to ensure long-term success and scalability.",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % divs.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + divs.length) % divs.length);
  };

  // Scroll to active div when activeIndex changes
  //   useEffect(() => {
  //     if (divRefs.current[activeIndex] && containerRef.current) {
  //       divRefs.current[activeIndex].scrollIntoView({
  //         behavior: "smooth",
  //         block: "nearest",
  //         inline: "center", // Ensures horizontal scrolling
  //       });
  //     }
  //   }, [activeIndex]);
  const animationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <>
      <div className="flex flex-col  gap-5 items-start px-5 lg:px-24 mt-10 mb-20">
        <div className="flex flex-1 flex-col pt-7 sand">
          <h1 className="text-4xl lg:text-6xl  font-bold ">
            Revolutionizing Ideas
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#3364C1]">
            into Digital Reality
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold ">
            with Our Expertise
          </h1>
          <p className="text-lg lg:text-2xl mt-4 sand  font-light">
            Our comprehensive approach ensures that every aspect of your project
            is meticulously crafted,
          </p>
          <p className="text-lg lg:text-2xl sand font-light">
            from initial concept to final deployment, delivering excellence at
            every stage.
          </p>
        </div>

        <div id="approach" className="w-full py-8 mt-10 overflow-hidden">
          {/* Forward/Backward Buttons */}
          <div className="flex justify-end gap-4 mb-9">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-gradient-to-r from-primary to-secondary  transition-colors"
            >
              <FaArrowLeft className={`text-white`} size={27} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-gradient-to-r from-primary to-secondary   transition-colors"
            >
              <FaArrowRight className={`text-white`} size={27} />
            </button>
          </div>
          <motion.div
            variants={animationVariants}
            initial={"hidden"}
            whileInView={"visible"}
          >
            <div
              ref={containerRef}
              className="  overflow-x-scroll scrollbar-hidden  gap-4 "
            >
              {/* Navigation Bar */}
              <div className=" relative bg-gray-700 h-[9px] w-[1333px] md:w-[1100px] mx-auto  lg:rounded-full border-[1px] mb-5">
                <div
                  className={`absolute w-1/4  top-[0px] flex justify-center items-center left-0 transform transition-transform duration-500`}
                  style={{
                    transform: ` translateX(${100 * activeIndex}%)`,
                  }}
                >
                  <img src={hook} alt="Hook" className=" mx-auto" />
                </div>
              </div>

              {/* Interactive Divs */}

              <div className="flex mt-20 w-[1333px] md:w-[1100px] mx-auto ">
                {divs.map((item, index) => (
                  <div className="px-2 w-1/4 ">
                    <div
                      key={index}
                      ref={(el) => (divRefs.current[index] = el)} // Assign ref
                      onClick={() => setActiveIndex(index)}
                      className={`  p-6 rounded-2xl h-80 md:h-[370px] overflow-hidden  cursor-pointer transition-all duration-500 shadow-xl ${
                        index === activeIndex
                          ? "bg-gradient-to-r from-primary to-secondary text-white -translate-y-9"
                          : "bg-white  text-primary "
                      }`}
                    >
                      <div className="flex flex-col items-start justify-start gap-5">
                        <span
                          className={`${
                            index === activeIndex
                              ? "text-white"
                              : "text-primaryColor"
                          } text-4xl`}
                        >
                          {item.icon}
                        </span>

                        <h3 className="font-bold sand text-2xl">
                          {item.title}
                        </h3>
                        <p className="text-md sand">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CustomSection;
