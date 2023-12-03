import React, { useEffect } from "react";
import img1 from "../../Assest/ortho-png-logo.webp";
import img2 from "../../Assest/1Point1-Logo.png";
import img3 from "../../Assest/athenabpo.png";
import img4 from "../../Assest/logo-42.webp";
import img5 from "../../Assest/white-PhotoRoom.png-PhotoRoom.png";
import { FaAnglesRight } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Clientpage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Set whether animation should only happen once
    });
  }, []);
  return (
    <div>
      <div
      
      className="bg-gradient-to-b from-black to-[#274584] h-[400px] overflow-hidden ">
        <div className="flex flex-col-reverse lg:flex-row justify-between lg:gap-2">
          <div
          data-aos="fade-left"
          className=" justify-center  lg:ps-10 flex flex-col gap-6">
            <h1 className="text-[#D1D5DB] text-center font-semibold font-[raleway] mt-5 lg:mt-0 text-2xl lg:text-start lg:text-4xl lg:w-[650px]">
              There’re lots of companies that we’ve worked for.
            </h1>
            <p className="text-white mb-10 lg:mb-0 text-center lg:text-lg lg:text-start font-[poppins] text-sm lg:w-[750px] lg:ps-4 ">
              We’re always working to fit the right people in the right places.
              Check out our current job opportunities.
            </p>
          </div>

          <svg
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
      <h1
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="text-center text-3xl lg:text-4xl font-[poppins] mt-5">
        Navigating Career <span className="text-[#1369AA]">Success</span>
        Together
      </h1>
      <p
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="text-gray-700 text-center mt-8 px-4 lg:px-36">
      Our team of experienced career counselors is dedicated to understanding your individual aspirations, strengths, and goals. Through personalized consultations, we provide insights and guidance tailored to your specific needs, helping you make informed decisions about your career path.
      </p>
      <div className=" flex items-center justify-evenly flex-col lg:flex-row gap-4 px-3 mt-5 flex-wrap pb-8">
       
        <div 
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="">
          <h1 className="text-2xl text-center text-gray-600 font-extralight font-[raleway]">
          Personalized Career  {""}
            <span className="text-[#274584]  font-[poppins] font-semibold">Counseling</span>
          </h1>
          <div className="flex  ms-10 gap-10 mt-5">
            <div className="h-[310px] md:h-[100px] lg:h-[180px] w-[2px] bg-[#274584] after:h-[10px] after:w-[10px] after:rounded-full relative after:absolute after:-left-[4px] after:-top-[5px] before:w-[10px] after:bg-[#274584] before:h-[10px] before:rounded-full before:bg-[#274584] before:absolute before:-left-[4px] before:-bottom-[5px]"></div>
            <div>
              <p className="lg:w-[400px] text-gray-700 font-[raleway] ">
              Our team of experienced career counselors is dedicated to understanding your individual aspirations, strengths, and goals. Through personalized consultations, we provide insights and guidance tailored to your specific needs, helping you make informed decisions about your career path.
              </p>
            </div>
          </div>
        </div>
        <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="">
          <h1 className="text-2xl text-center text-gray-600 font-extralight font-[raleway]">
          Skill Enhancement   {""}
            <span className="text-[#274584]  font-[poppins] font-semibold">Workshops</span>
          </h1>
          <div className="flex ms-10 gap-10 mt-5">
            <div className="h-[310px] md:h-[100px] lg:h-[180px] w-[2px] bg-[#274584] after:h-[10px] after:w-[10px] after:rounded-full relative after:absolute after:-left-[4px] after:-top-[5px] before:w-[10px] after:bg-[#274584] before:h-[10px] before:rounded-full before:bg-[#274584] before:absolute before:-left-[4px] before:-bottom-[5px]"></div>
            <div>
              <p className="lg:w-[400px] text-gray-700 font-[raleway] ">
                In today's dynamic job market, staying ahead requires continuous skill development. Our skill enhancement workshops cover a range of topics, from industry-specific tools to soft skills like communication and leadership. These sessions are designed to equip you with the competencies necessary for success in your chosen field.
              </p>
            </div>
          </div>
        </div>
        <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="">
          <h1 className="text-2xl text-center text-gray-600 font-extralight font-[raleway]">
          Interview   {""}
            <span className="text-[#274584]  font-[poppins] font-semibold">Preparation</span>
          </h1>
          <div className="flex  ms-10 gap-10 mt-5">
            <div className="h-[310px] md:h-[100px] lg:h-[180px] w-[2px] bg-[#274584] after:h-[10px] after:w-[10px] after:rounded-full relative after:absolute after:-left-[4px] after:-top-[5px] before:w-[10px] after:bg-[#274584] before:h-[10px] before:rounded-full before:bg-[#274584] before:absolute before:-left-[4px] before:-bottom-[5px]"></div>
            <div>
              <p className="lg:w-[400px] text-gray-700 font-[raleway] ">
              Facing an interview can be a nerve-wracking experience. Our interview preparation services include mock interviews, feedback sessions, and valuable tips to boost your confidence and improve your performance during actual job interviews. We aim to transform interviews into opportunities for you to shine.
              </p>
            </div>
          </div>
        </div>
        <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="">
          <h1 className="text-2xl text-center text-gray-600 font-extralight font-[raleway]">
          Networking Events and {""}
            <span className="text-[#274584]  font-[poppins] font-semibold">Communities</span>
          </h1>
          <div className="flex ms-10 gap-10 mt-5">
            <div className="h-[310px] md:h-[100px] lg:h-[180px] w-[2px] bg-[#274584] after:h-[10px] after:w-[10px] after:rounded-full relative after:absolute after:-left-[4px] after:-top-[5px] before:w-[10px] after:bg-[#274584] before:h-[10px] before:rounded-full before:bg-[#274584] before:absolute before:-left-[4px] before:-bottom-[5px]"></div>
            <div>
              <p className="lg:w-[400px] text-gray-700 font-[raleway] ">
              Building a robust professional network is key to opening doors to new opportunities. Our networking events and online communities connect you with like-minded individuals, industry experts, and potential employers, fostering meaningful connections that can shape your career trajectory.
              </p>
            </div>
          </div>
        </div>
        <div 
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="">
          <h1 className="text-2xl text-center text-gray-600 font-extralight font-[raleway]">
          Resume Building and  {""}
            <span className="text-[#274584]  font-[poppins] font-semibold">Optimization</span>
          </h1>
          <div className="flex  ms-10 gap-10 mt-5">
            <div className="h-[310px] md:h-[100px] lg:h-[180px] w-[2px] bg-[#274584] after:h-[10px] after:w-[10px] after:rounded-full relative after:absolute after:-left-[4px] after:-top-[5px] before:w-[10px] after:bg-[#274584] before:h-[10px] before:rounded-full before:bg-[#274584] before:absolute before:-left-[4px] before:-bottom-[5px]"></div>
            <div>
              <p className="lg:w-[400px] text-gray-700 font-[raleway] ">
              Crafting a compelling resume is crucial in making a strong first impression. Our experts work with you to create a professional resume that highlights your achievements and showcases your potential. We also offer optimization services to ensure your resume aligns seamlessly with the requirements of modern recruitment processes.
              </p>
            </div>
          </div>
        </div>
        <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="">
          <h1 className="text-2xl text-center text-gray-600 font-extralight font-[raleway]">
          Job Search  {""}
            <span className="text-[#274584]  font-[poppins] font-semibold">Support</span>
          </h1>
          <div className="flex ms-10 gap-10 mt-5">
            <div className="h-[310px] md:h-[100px] lg:h-[180px] w-[2px] bg-[#274584] after:h-[10px] after:w-[10px] after:rounded-full relative after:absolute after:-left-[4px] after:-top-[5px] before:w-[10px] after:bg-[#274584] before:h-[10px] before:rounded-full before:bg-[#274584] before:absolute before:-left-[4px] before:-bottom-[5px]"></div>
            <div>
              <p className="lg:w-[400px] text-gray-700 font-[raleway] ">
              Navigating the job market can be challenging, especially with the myriad of opportunities available. Our job search support services include job matching, application assistance, and insights into emerging trends, streamlining your efforts and increasing your chances of landing the perfect role.
              </p>
            </div>
          </div>
        </div>




      </div>

      <h1  data-aos="zoom-in" className='text-center text-3xl lg:text-4xl font-[poppins] font-semibold mt-10'>Our Clients</h1>
      <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="bg-[#E3F6F9] mt-10 ">
        <div className="flex flex-col justify-center items-center  lg:flex-row lg:justify-evenly">
          <img className="w-[200px] h-[150px] object-contain rounded" src={img1}/>
          <img className="w-[200px] h-[150px] object-contain" src={img2}/>
          <img className="w-[200px] h-[150px] object-contain rounded" src={img3}/>
          <img className="w-[200px] h-[150px] object-contain rounded" src={img4}/>
          <img className="w-[200px] h-[150px] object-contain rounded" src={img5}/>
        </div>
      </div>
<div className="flex flex-col lg:flex-row justify-evenly items-center mt-10 px-4">
<div className="flex flex-col justify-center items-center gap-4">
  
  <div 
  data-aos="fade-down"
  data-aos-easing="linear"
  data-aos-duration="1500"
  className="flex flex-col justify-center items-center gap-3">
          <h1 className=" font-bold text-xl">
          Our Services
          </h1>
          <div className=" bg-[#1369AA] h-[2px] w-[200px]"></div>
        </div>
        <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        >
          <p className="text-[raleway] font-semibold text-lg text-center">We offer a range of services designed to meet your unique career needs</p>
          <ul className="text-gray-700 flex flex-col gap-5 mt-5">
            <li className="flex gap-2 items-center"><FaAnglesRight className="text-[#1369aa]"/> Resume Building: Craft a professional resume that stands out.</li>
            <li className="flex gap-2 items-center"><FaAnglesRight className="text-[#1369aa]"/> Job Matching: Find job opportunities that align with your skills and goals.</li>
            <li className="flex gap-2 items-center"><FaAnglesRight className="text-[#1369aa]"/> Interview Preparation: Gain the confidence to ace your interviews.</li>
            <li className="flex gap-2 items-center"><FaAnglesRight className="text-[#1369aa]"/> Career Counseling: Receive personalized guidance for your career path.</li>
          </ul>
        </div>
  
  </div>
  <div className="flex flex-col justify-center items-center gap-4">
    
  <div
  data-aos="fade-down"
  data-aos-easing="linear"
  data-aos-duration="1500"
  className="flex flex-col justify-center items-center gap-3">
          <h1 className=" font-bold text-xl">
          How It Works
          </h1>
          <div className=" bg-[#1369AA] h-[2px] w-[200px]"></div>
        </div>
        <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        >
          <p className="text-[raleway] font-semibold text-lg text-center">Getting started with our consultancy is simple</p>
          <ul className="text-gray-700 flex flex-col gap-5 mt-5">
            <li className="flex gap-2 items-center"><FaAnglesRight className="text-[#1369aa]"/> Contact Us: Reach out via email or phone to schedule an initial consultation.</li>
            <li className="flex gap-2 items-center"><FaAnglesRight className="text-[#1369aa]"/> Assessment: We'll assess your skills, goals, and career aspirations.</li>
            <li className="flex gap-2 items-center"><FaAnglesRight className="text-[#1369aa]"/> Personalized Plan: Receive a personalized plan tailored to your needs.</li>
            <li className="flex gap-2 items-center"><FaAnglesRight className="text-[#1369aa]"/>Support: Benefit from ongoing support and guidance throughout your job search..</li>
          </ul>
        </div>
  
  </div>
  
</div>




       
    </div>
  );
}

export default Clientpage;
