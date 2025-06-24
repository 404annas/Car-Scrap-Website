import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [activeSection, setActiveSection] = useState(0);
  const titleRefs = useRef([]);
  const observerRef = useRef(null);

  const services = [
    {
      number: "1",
      title: "Research & Development",
      description:
        "We dig deep to uncover the best opportunities, trends, and strategies that boost your growth and community impact.",
    },
    {
      number: "2",
      title: "Project Coordination and  Management",
      description:
        "We provide end-to-end project management, program development, and event coordination ensuring every initative is strategically planned, expertly executed, and aligned with your goals from intial concept to final delivery, we turn vision into measurable impact.",
    },
    {
      number: "3",
      title: "Technical Writing & Document Design",
      description:
        " We transform complex information into clear, actionable documentation—whether it's SOPs, grant proposals, or contract deliverables—ensuring your team and stakeholders stay aligned, compliant, and ready to execute with confidence.",
    },
    {
      number: "4",
      title: "Operations Management",
      description:
        "We streamline your internal processes, align your systems, and optimize daily workflows so your organization runs smoothly, efficiently, and with purpose-driven momentum.",
    },
    {
      number: "5",
      title: "Technical Assistance",
      description:
        "We empower organizations with the skills, resources, and guidance needed to enhance their efficiency, sustainability, and impact.",
    },
  ];

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = titleRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -50% 0px" }
    );

    titleRefs.current.forEach((title) => {
      if (title) observerRef.current.observe(title);
    });

    return () => observerRef.current.disconnect();
  }, []);

  return (
    <section id="services" className="py-14  bg-white">
      <div className="flex items-center text-center justify-center ">
        <h2 className="text-3xl  md:text-8xl sand font-bold mb-3 heading">
          <span className="text-third heading">Services</span>
        </h2>{" "}
      </div>
      <div className="relative flex flex-col md:flex-row">
        {/* Fixed Number Section (Odometer Effect) */}
        <div className="sticky top-0 h-[50vh] md:h-[50vh] w-full md:w-1/2 hidden md:flex lg:flex items-center justify-center pointer-events-none z-10 overflow-hidden">
          <div className="relative  flex items-center">
            <div className="flex flex-row gap-2 pt-10 items-center">
              {/* <AnimatePresence mode="popLayout"> */}
              <motion.span
                key={services[activeSection]?.number}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                // transition={{ type: "tween", duration: 0.4 }}
                className="absolute text-first sand font-bold number md:text-[180px] lg:text-[250px]"
              >
                {services[activeSection]?.number}
              </motion.span>
              <h1 className="lg:text-[250px] text-first  md:translate-y-2 md:text-[220px] md:-translate-x-28  lg:-translate-x-36">
                0
              </h1>
            </div>
            {/* </AnimatePresence> */}
          </div>
        </div>

        {/* Scrollable Content Section */}
        <div className="w-full md:w-3/4 px-5  md:px-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="md:h-[40vh] h-[35vh] flex flex-col justify-center border-b border-gray-200 last:border-b-0"
            >
              <div className="space-y-2 md:space-y-4 max-w-6xl">
                <div className="md:hidden flex flex-row items-center">
                  <h1 className="text-black sand text-5xl font-bold">
                    0{service.number}
                  </h1>
                </div>
                <h2
                  ref={(el) => (titleRefs.current[index] = el)}
                  className="text-3xl uppercase sm:text-4xl   text-primary  md:text-4xl lg:text-5xl font-bold tracking-tight"
                >
                  {service.title}
                </h2>
                <p className="text-xs sm:text-base   text-gray-900  leading-6 md:text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
