// Services.js
import React, { useEffect, useState } from "react";
import ApplyForm from "../Components/contact/ApplyForm";
import img from "../img/1.png";
import FAQ from "./Faq";
import img3 from "../Assest/3.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';


const locations = ['Chennai', "Bangalore", "Mumbai", "Telangana",'Pune','Noida','Lucknow','Hyderabad','Gurugram','Delhi'];


function Services() {
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleApplyClick = () => {
    setShowApplyForm(true);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Set whether animation should only happen once
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="bg-gradient-to-b from-[#7CB252] to-[#1369AA] h-[450px] lg:h-[400px]  ">
        <div className="flex flex-col-reverse lg:flex-row justify-between lg:gap-2">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className=" justify-center  lg:ps-10 flex flex-col gap-6">
            <h1 className="text-white text-center font-semibold font-[popins] mt-5 lg:mt-0 text-2xl lg:text-[2.8rem]">
              LETS START YOUR CAREERS HERE!
            </h1>
            <p className="text-white mb-10 lg:mb-0 text-center lg: lg:text-start font-[poppins] text-sm lg:text-base lg:w-[750px] lg:ps-10 p-2">
              Welcome to our Epic , where expertise meets opportunity!
              Join a collaborative team of industry leaders, where your skills
              and insights shape impactful solutions. Explore diverse career
              paths, unlocking the potential to drive positive change for our
              clients. Your consultancy journey starts here, where innovation,
              collaboration, and growth converge for a fulfilling career
              experience.
            </p>
          </div>

          <svg
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"

            focusable="false"
            className="hero__honeycom lg:h-[370px] h-[120px] lg:w-[320px] "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 308.72 465.51"
          >
            <title>qti-inside-page-honeycomb-desktop</title>
            <path
              d="M245.36,34.33,185.9,0,126.44,34.33V103l59.46,34.33L245.36,103Z"
              fill="#fff"
            ></path>
            <path
              d="M182.1,143.68l-59.46-34.33L63.18,143.68v68.66l59.46,34.33,59.46-34.33Z"
              fill="#fff"
            ></path>
            <path
              d="M308.61,143.68l-59.46-34.33-59.46,34.33v68.66l59.46,34.33,59.46-34.33Z"
              fill="#fff"
            ></path>
            <path
              d="M118.92,253.2,59.46,218.87,0,253.2v68.66l59.46,34.33,59.46-34.33Z"
              fill="#fff"
            ></path>
            <path
              d="M245.46,253.2,186,218.87,126.54,253.2v68.66L186,356.19l59.46-34.33Z"
              fill="#fff"
            ></path>
            <path
              d="M308.72,362.52l-59.46-34.33L189.8,362.52v68.66l59.46,34.33,59.46-34.33Z"
              fill="#fff"
            ></path>
          </svg>
        </div>
      </div>
      <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="px-4 flex flex-col items-center">
        <h1 className="text-center font-bold text-lg md:text-2xl mt-12 lg:text-3xl">
          Developing Your Career With Epic!
        </h1>
        <div className="border-b-2 border-blue-500 w-[540px] border-solid p-4"></div>
      </div>



      <div
      data-aos="fade-down"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="rounded-lg p-6 w-full flex lg:flex-row flex-col justify-evenly lg:mt-16 gap-11">
        <div className=" ">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-blue-600 text-center">
            Services
          </h1>

          <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-700">
            Areas of Placement:
          </h2>
          <ul className="grid grid-cols-2  mb-4">
            {locations.map((location, index) => (
              <li
                key={index}
                onClick={() => handleLocationClick(location)}
                className={`cursor-pointer px-3 md:px-4 py-2 m-1 md:m-2 border border-gray-300 rounded ${selectedLocation === location
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                  }`}
              >
                {location}
              </li>
            ))}
          </ul>

          <button
            onClick={handleApplyClick}
            className="bg-blue-500 w-full md:w-auto lg:ms-12 text-white px-3 lg:px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Apply Here
          </button>
        </div>
        <div className="w-96 ">
          <img src={img3} className="" />
        </div>
      </div>

      {showApplyForm && (
        <ApplyForm
          onClose={() => setShowApplyForm(false)}
          selectedLocation={selectedLocation}
        />
      )}
      <div 
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="">
        <FAQ />
      </div>

    </div>
  );
}

export default Services;