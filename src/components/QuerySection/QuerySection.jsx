import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import sadPersonNew from "../../assets/sadPersonNeww.png";
import { FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ text, className }) => {
  return (
    <div
      className={`${className} bg-white relative  shadow-lg  rounded-lg  w-[300px] md:w-[400px] text-lg md:text-xl border-gray-800 border-2 `}
    >
      <h2 className=" font-bold bg-gradient-to-r from-primary to-secondary text-white p-4 border-b-2 border-gray-800 rounded-t-lg flex gap-2 text-base">
        <FaRegCircle />
        <FaRegCircle />
        <FaRegCircle />
      </h2>
      <p className="px-8 py-6 anonymous font-semibold">{text}</p>
    </div>
  );
};

const QuerySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <section className="py-10 px-2 bg-white ">
      <div className="text-center mb-8">
        <h1 className="text-2xl sand md:text-4xl font-extrabold">
          Get In Touch With Us
        </h1>
        <p className=" my-4 sand font-bold text-5xl md:text-7xl lg:text-8xl w-full md:px-32 mx-auto ">
          All this sounds so familiar, right?
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-4 md:px-20">
        {/* Left Cards */}
        <div className="flex flex-col gap-20 lg:-mr-32 relative z-10 max-lg:order-3 max-lg:py-16">
          <div data-aos="zoom-out">
            <Card
              className={"-rotate-3"}
              text={"Facing technical difficulties?"}
            />
          </div>
          <div data-aos="zoom-out">
            <Card
              className={"rotate-6"}
              text={"Need guidance on next steps?"}
            />
          </div>
        </div>

        {/* Center Image */}
        <div className=" max-lg:order-1 ">
          <img
            src={sadPersonNew}
            alt="Center"
            className="translate-x-10 max-md:my-4 w-[500px]"
          />
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-20 lg:-ml-33  relative z-10 max-lg:border-2 max-lg:pb-16">
          <div data-aos="zoom-out">
            <Card className={"rotate-3"} text={"Want to talk to an expert?"} />
          </div>
          <div data-aos="zoom-out">
            <Card className={"-rotate-6"} text={"We're just a message away!"} />
          </div>
        </div>
      </div>
      <p
        className="text-center w-full px-7 lg:w-2/3 mx-auto my-9 text-xl font-semibold "
        data-aos="fade-up"
      >
        Reach out to our team and let’s make things easier together.
      </p>
      <Link
        to={"/contact-us"}
        className="w-fit px-6 py-3 bg-first   text-white text-md font-bold rounded-full hover:bg-primary transition-all flex justify-center  items-center mx-auto"
        data-aos="fade-up"
      >
        Contact Us
      </Link>
    </section>
  );
};

export default QuerySection;
