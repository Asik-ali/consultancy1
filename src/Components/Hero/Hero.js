import React, { useState, useEffect } from "react";
import { LuChevronsUp } from "react-icons/lu";
import icon from "../../../src/Assest/images.png";
import bg from "../../Assest/bg.jpeg";
import Services from "../../Pages/Services";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Set whether animation should only happen once
    });
  }, []);

  return (
    <div className="overflow-hidden ">
      <div
        className="relative h-screen w-screen px-4 flex flex-col justify-center bg-gradient-to-b from-[#CAD9F] to-[#446595] text-white"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div data-aos="zoom-in-left" className="mx-auto text-center lg:text-start relative z-10">
          <h1  class="text-4xl md:text-5xl lg:text-6xl font-semibold  font-[poppins] mb-4 text-gray-300">
            Embrace a New Journey ✨
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 font-[ContrailOne] text-gray-300">
            Unlock endless possibilities with our expertise in the ever-evolving
            digital landscape.
          </p>
          <div className="flex flex-col justify-center md:flex-row gap-3 px-4">
            <button className="font-[DMSans] text-xl px-5 py-3 rounded bg-blue-600 hover:bg-blue-700 hover:text-white duration-300">
            <Link  to="Services">Apply Now</Link>
            </button>
            <button className="px-5 py-3 rounded font-[DMSans] text-xl bg-gray-800 hover:bg-gray-900 hover:text-white duration-300">
              We Are Hiring
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed h-[50px] w-[50px] rounded-full bottom-12 text-3xl left-4 z-30 ${
          isVisible ? "visible" : "hidden"
        }`}
      >
        <a href="https://wa.me/918097061134">
          <img className="rounded-full" src={icon} alt="" />
        </a>
      </div>

      <div
        className={`fixed h-[50px] flex items-center justify-center w-[50px] bg-[#1369AA] rounded-full bottom-12 text-4xl right-4 z-30 ${
          isVisible ? "visible" : "hidden"
        }`}
        onClick={handleScrollToTop}
        style={{ cursor: "pointer" }}
      >
        <LuChevronsUp className="text-white" />
      </div>
    </div>
  );
}