import React from "react";
// Replaced react-icons with inline SVG for better compatibility in various environments.

const Footer = () => {
  return (
    // Main footer container with the primary background color
    <footer className="bg-[#152C85] text-white py-12 px-5 lg:px-24 relative rounded-t-lg">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Logo and Description */}
        <div className="flex flex-col items-start space-y-4">
          {/* <div className="flex flex-col items-start"> */}
          {/* Using text for logo as image asset is not available */}
          {/* <h2 className="text-3xl font-bold">TATA MOTORS</h2>
            <h3 className="text-3xl font-bold">REWIRE</h3>
            <p className="text-sm">RECYCLE. WITH. RESPECT.</p>
          </div> */}
          <p className="text-sm leading-relaxed">
            Rewire is the most trusted and respectful way of scrapping your
            registered vehicle, which is no longer fit to drive and is
            classified as End-of-Life Vehicle (ELV). With fair pricing mechanism
            and state of the art facility to dismantle the vehicles, Rewire is
            committed to serve its customers while ensuring that scrapping is
            done in environmental friendly way, in compliance with government
            norms.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col items-start space-y-4">
          <a
            href="#"
            className="text-white hover:text-[#2C72D4] transition-colors text-lg"
          >
            SELL
          </a>
          <a
            href="#"
            className="text-white hover:text-[#2C72D4] transition-colors text-lg"
          >
            TERMS & CONDITIONS
          </a>
          <a
            href="#"
            className="text-white hover:text-[#2C72D4] transition-colors text-lg"
          >
            GET BEST PRICE
          </a>
          <a
            href="#"
            className="text-white hover:text-[#2C72D4] transition-colors text-lg"
          >
            CONTACT US
          </a>
          <a
            href="#"
            className="text-white hover:text-[#2C72D4] transition-colors text-lg"
          >
            ABOUT US
          </a>
          {/* Social Media Icons - Replaced with inline SVGs */}
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="p-3 bg-white text-[#152C85] rounded-full hover:bg-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V275.92h-47.37V220.1H185.38V180.2c0-47.06 28.69-72.93 70.92-72.93 20.25 0 37.66 1.5 42.71 2.18V170a256.33 256.33 0 0 0-36.57-3.76c-35.84 0-42.71 17.06-42.71 41.97v31h58.3l-9.33 55.82h-48.97V448H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
              </svg>
            </a>
            <a
              href="#"
              className="p-3 bg-white text-[#152C85] rounded-full hover:bg-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M224.1 128.5c-45.3 0-49.8 1.4-56 3.1-6.1 1.7-10.4 4.1-14.9 8.6-4.5 4.5-6.9 8.9-8.6 14.9-1.7 6.1-3.1 10.6-3.1 56s1.4 49.8 3.1 56c1.7 6.1 4.1 10.4 8.6 14.9 4.5 4.5 8.9 6.9 14.9 8.6 6.1 1.7 10.6 3.1 56 3.1s49.8-1.4 56-3.1c6.1-1.7 10.4-4.1 14.9-8.6 4.5-4.5 6.9-8.9 8.6-14.9 1.7-6.1 3.1-10.6 3.1-56s-1.4-49.8-3.1-56c-1.7-6.1-4.1-10.4-8.6-14.9-4.5-4.5-8.9-6.9-14.9-8.6-6.1-1.7-10.6-3.1-56-3.1zM224 0C100.1 0 0 100.1 0 224v64c0 123.9 100.1 224 224 224s224-100.1 224-224V224C448 100.1 347.9 0 224 0zm0 400C129.5 400 48 318.5 48 224S129.5 48 224 48s176 81.5 176 176-81.5 176-176 176zm-61.2-208.5c-5.8 0-10.6 4.7-10.6 10.6s4.7 10.6 10.6 10.6h.2c5.8 0 10.6-4.7 10.6-10.6s-4.7-10.6-10.6-10.6zM224 192a64 64 0 1 0 0 128 64 64 0 1 0 0-128z" />
              </svg>
            </a>
            <a
              href="#"
              className="p-3 bg-white text-[#152C85] rounded-full hover:bg-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.57 298.55-298.55 298.55-59.45 0-114.65-17.2-161.12-47.37 8.42-.972 16.533-1.295 24.593-1.295 49.808 0 95.932-16.71 132.88-44.97-46.33-.94-85.20-31.42-98.57-73.13 6.13.93 12.06 1.54 18.06 1.54 8.68 0 17.2-.68 25.43-2.31-48.34-9.75-84.77-52.54-84.77-103.5v-1.27c14.28 7.9 30.55 12.78 47.78 13.34-28.2-18.84-46.77-50.62-46.77-87.49 0-19.38 5.21-37.49 14.1-53.17 51.52 63.15 129.32 104.53 216.03 109.18-1.6-7.85-2.58-15.93-2.58-24.17 0-58.4 47.28-105.7 105.7-105.7 30.45 0 58.12 12.84 77.42 33.45 24.23-4.63 47.4-13.69 68.04-26.08-7.9 24.62-24.6 45.13-46.3 58.37 21.43-2.61 41.97-8.23 61.08-16.89z" />
              </svg>
            </a>
            <a
              href="#"
              className="p-3 bg-white text-[#152C85] rounded-full hover:bg-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zM135.2 388.7c-6.8 0-13.5-3.3-17.5-9.8c-2.4-3.9-3.6-8.5-3.6-13.3v-120a16 16 0 0 1 16-16h24a16 16 0 0 1 16 16v120c0 4.8-1.2 9.4-3.6 13.3-4 6.5-10.7 9.8-17.5 9.8zM240 388.7c-6.8 0-13.5-3.3-17.5-9.8c-2.4-3.9-3.6-8.5-3.6-13.3v-120a16 16 0 0 1 16-16h24a16 16 0 0 1 16 16v120c0 4.8-1.2 9.4-3.6 13.3-4 6.5-10.7 9.8-17.5 9.8zM368 388.7c-6.8 0-13.5-3.3-17.5-9.8c-2.4-3.9-3.6-8.5-3.6-13.3v-120a16 16 0 0 1 16-16h24a16 16 0 0 1 16 16v120c0 4.8-1.2 9.4-3.6 13.3-4 6.5-10.7 9.8-17.5 9.8z" />
              </svg>
            </a>
            <a
              href="#"
              className="p-3 bg-white text-[#152C85] rounded-full hover:bg-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M549.655 124.083c-6.281-23.64-24.787-42.276-48.284-48.597C458.853 64 288 64 288 64S117.153 64 74.629 75.486c-23.497 6.322-42 24.958-48.284 48.597-11.668 44.25-11.668 139.81-11.668 139.81s0 95.56 11.668 139.81c6.281 23.64 24.787 42.276 48.284 48.597C117.153 448 288 448 288 448s170.847 0 213.371-11.486c23.497-6.322 42-24.958 48.284-48.597 11.668-44.25 11.668-139.81 11.668-139.81s0-95.56-11.668-139.81zM232 343V170l145 86-145 87z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 3: Address and Contact Info */}
        <div className="flex flex-col items-start space-y-4">
          <p className="text-sm">
            Tata Motors Ltd 4th Floor , Ahura Centre 82
            <br />
            Mahakali Caves Road MIDC , Andheri East
            <br />
            Mumbai - 400093
          </p>
          <p className="text-sm">Call us at : 1800 2097979</p>
          <p className="text-sm">Email us at rewiresupport@tatamotors.com</p>
        </div>

        {/* Column 4: Action Buttons */}
        <div className="flex flex-col items-start space-y-4 justify-center">
          <button className="bg-white text-[#152C85] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition-colors w-full text-center max-w-xs">
            GET INSTANT PRICE
          </button>
          <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-white hover:text-[#152C85] transition-colors w-full text-center max-w-xs">
            REQUEST CALL BACK
          </button>
        </div>
      </div>

      {/* Copyright Section */}

      {/* Floating Call Button - Replaced with inline SVG */}
    </footer>
  );
};

export default Footer;
