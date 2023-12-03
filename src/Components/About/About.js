import React, { useEffect } from "react";
import hero from "../../Assest/a 2.jpg";
import img1 from "../../Assest/1.png"
import img2 from "../../Assest/2.jpg"
import img3 from "../../Assest/3.jpg"
import img4 from "../../Assest/4.jpg"
import about from "../../Assest/aboutimg1.jpg"
import responsibilities from "./Resposibiltesdata";
import approachPoints from "./Apporachpoint";
import AOS from 'aos';
import 'aos/dist/aos.css';
function AboutContent() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Set whether animation should only happen once
    });
  }, []);
  return (
    <div 
   
     className="overflow-x-hidden">
      <div 
       data-aos="fade-right"
       data-aos-offset="300"
       data-aos-easing="ease-in-sine"
      className="bg-gradient-to-b from-blue-500 to-black  ">
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <div className=" justify-center  lg:ps-10 flex flex-col gap-6">
            <h1 className="text-[#D1D5DB] text-center font-semibold font-[raleway] mt-5 lg:mt-0 text-3xl lg:text-5xl">
              Working together makes us stronger
            </h1>
            <p className="text-white mb-10 lg:mb-0 text-center lg:text-xl lg:text-start font-[poppins] text-sm lg:w-[650px] ">
              Epic Solutions provides you with Human Resource Solutions that are
              well researched.Our team is trained to deliver relevant profiles
              within tight deadlines.
            </p>
          </div>
          <div className="">
            <img src={hero} className="rounded w-[600px]  object-cover" />
          </div>
        </div>
      </div>
      

      <div 
       
      className=" flex flex-col lg:flex-row px-4 gap-5 lg:gap-0 items-center justify-evenly  mt-10">
        <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="">
          <h1 className="text-4xl text-gray-600 font-extralight font-[raleway]">
            <span className="text-[#274584]  font-[poppins] font-semibold">
              Consultancy
            </span>{" "}
            that empowers you...
          </h1>
          <div className="flex ms-10 gap-10 mt-10">
            <div className="h-[310px] md:h-[100px] lg:h-[210px] w-[2px] bg-[#274584] after:h-[10px] after:w-[10px] after:rounded-full relative after:absolute after:-left-[4px] after:-top-[5px] before:w-[10px] after:bg-[#274584] before:h-[10px] before:rounded-full before:bg-[#274584] before:absolute before:-left-[4px] before:-bottom-[5px]"></div>
            <div>
              <p className="lg:w-[300px] text-gray-700 text-lg font-[raleway] ">
                At Epic Solutions, we advocate for a personalized approach to HR
                services. Our dedicated team collaborates closely with clients
                to comprehend their unique needs and company culture, enabling
                the seamless matching of candidates.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
        <div className="flex flex-col gap-2">
  <div className="relative group">
    <div className="w-[300px] h-[200px] relative">
      <img
      data-aos="flip-down"
      className="w-full h-full object-cover" src={img1} />
      <div className="absolute inset-0 bg-black p-2 opacity-0 duration-500 transition-opacity  group-hover:opacity-[0.7]">
        <p className="text-white absolute bottom-4 right-0 text-xl font-[poppins]">From Idea to Implementation</p>
      </div>
    </div>
  </div>
  <div className="relative group">
    <div className="w-[300px] h-[200px] relative">
      <img 
      data-aos="flip-up"
      className="w-full h-full object-cover" src={img2} />
      <div className="absolute inset-0 bg-black p-2 opacity-0 duration-500 transition-opacity  group-hover:opacity-[0.7]">
        <p className="text-white bottom-4 right-10 text-xl font-[poppins]  absolute">The Digital Statement</p>
      </div>
    </div>
  </div>
</div>
          <div className="flex flex-col gap-2">
  <div className="relative group">
    <div className="w-[300px] h-[200px] relative">
      <img
      data-aos="flip-down"
      className="w-full h-full object-cover" src={img3} />
      <div className="absolute inset-0 bg-black p-2 opacity-0 duration-500 transition-opacity  group-hover:opacity-[0.7]">
        <p className="text-white absolute bottom-4 right-0 text-xl font-[poppins] text-center">The Team that Delivers Results</p>
      </div>
    </div>
  </div>
  <div className="relative group">
    <div className="w-[300px] h-[200px] relative">
      <img
      data-aos="flip-up"
      className="w-full h-full object-cover" src={img4} />
      <div className="absolute inset-0 bg-black p-2 opacity-0 duration-500 transition-opacity  group-hover:opacity-[0.7]">
        <p className="text-white bottom-4 right-0 text-xl font-[poppins] text-center absolute">We touch your life in more ways!</p>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>

      <div
       data-aos="fade-up"
       data-aos-offset="300"
       data-aos-easing="ease-in-sine"
      className="bg-[#E3F6F9] mt-5 ">
        <h1 className="text-center text-xl  lg:text-2xl p-5 lg:p-10">
          Say 
          <span className="text-[#274584] font-[poppins] font-semibold text-2xl lg:text-3xl">
          {" "}   Goodbye to Unemployment
          </span>{" "}
          Hiring is the most important people function you have, and most of us
          aren't as good at it as we think. Refocusing your resources on hiring
          better will have a higher return than almost any training program
          you can develop.
        </h1>
      </div>


      <div className='mt-10 lg:px-4'>
  <h1 
  data-aos="zoom-out-left"
  className='text-center text-3xl lg:text-4xl font-[poppins] font-semibold'>About Us</h1>
  <div className='flex flex-col lg:flex-row lg:mx-4 container px-4 items-center justify-center gap-10 mt-5'>
    <div>
      <img
      data-aos="flip-left"
      className='w-full  rounded' src={about} alt='About Us Image' />
    </div>
    <div
    data-aos="fade-up"
     data-aos-anchor-placement="top-center"
    className='flex flex-col'>
      <h1 className='text-xl font-semibold lg:text-4xl'>Empowering Success Through Talent</h1>
      <div className='lg:w-[650px] mt-7 flex flex-col gap-2 text-gray-600 lg:text-lg leading-7'>
        <p>
          A recruitment agency works on behalf of an organization to help fill open positions with qualified candidates, including sourcing and vetting individuals and presenting top talent to hiring managers.
        </p>
        <p>
          We are your partner in navigating the dynamic world of Human Resources, specializing in providing tailored HR management services to organizations, ensuring they attract and retain top talent.
        </p>
        <p>
          Our commitment is to build strong and lasting relationships, fostering success for both businesses and individuals in the ever-evolving landscape of the professional world.
        </p>
      </div>
    </div>
  </div>
</div>


<div className="container  mx-auto mt-8">
      <h1
      data-aos="flip-up"
      className="text-3xl font-bold mb-6 text-center">Our Responsibilities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {responsibilities.map((responsibility, index) => (
         <div
         data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="1000"
     data-aos-duration="1000"
         className="group" key={index}>
           <div
            
            className=" responsibility-card bg-[#E3F6F9] group-hover:bg-[#274584] group-hover:text-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-[raleway] font-bold mb-4">{responsibility.title}</h2>
            <p className="text-gray-600 group-hover:text-white">{responsibility.description}</p>
          </div>
         </div>
        ))}
      </div>
    </div>
  

    <div className="container mx-auto mt-8 overflow-hidden pb-8">
      <h1
      data-aos="flip-up"
      className="text-3xl font-bold mb-6 text-center">Our Approach at Epic Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {approachPoints.map((point, index) => (
         <div 
         data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="1000"
     data-aos-duration="1000"
         key={index} className="group">
           <div
          
            className="responsibility-card bg-[#E3F6F9] group-hover:bg-[#274584] group-hover:text-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 "
          >
            <h2 className="text-xl font-[raleway] font-bold mb-4 ">{point.title}</h2>
            <p className="text-gray-600 group-hover:text-white">{point.description}</p>
          </div>
         </div>
        ))}
      </div>
    </div>
  
    
    
      
    </div>
  );
}

export default AboutContent;
