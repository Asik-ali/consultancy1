import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Carrer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Set whether animation should only happen once
    });
  }, []);
  return (
    <div>
      <div className="bg-gradient-to-b from-gray-700 to-gray-900 h-[400px] overflow-hidden ">
        <div className="flex flex-col-reverse lg:flex-row justify-between lg:gap-2">
          <div
           data-aos="fade-left"
           data-aos-anchor="#example-anchor"
           data-aos-offset="500"
           data-aos-duration="500"
          className=" justify-center  lg:ps-10 flex flex-col gap-6">
            <h1 className="text-[#D1D5DB] text-center font-semibold font-[raleway] mt-5 lg:mt-0 text-2xl lg:text-5xl">
              Get in Touch with Epic Solutions
            </h1>
            <p className="text-white mb-10 lg:mb-0 text-center lg: lg:text-start font-[poppins] text-sm lg:w-[750px] lg:ps-10 ">
              At Epic Solutions, we believe in the power of collaboration.
              Working together not only makes us stronger but also propels your
              business towards unparalleled success. If you're ready to
              experience the difference that strategic human resource solutions
              can make, we invite you to reach out to us
            </p>
          </div>

          <svg
          data-aos="fade-up"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
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
       data-aos="fade-up"
       data-aos-anchor="#example-anchor"
       data-aos-offset="500"
       data-aos-duration="500"
      className="bg-gray-100 mb-10 mt-10 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">HR Specialist</h2>
        <p className="text-gray-700">
          We are looking for an experienced HR Specialist to join our dynamic team. If you have a passion for
          recruitment, employee relations, and creating a positive workplace culture, we want to hear from you!
        </p>
        <ul className="mt-4">
          <li className="flex items-center">
            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            Manage end-to-end recruitment process.
          </li>
          <li className="flex items-center mt-2">
            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            Develop and implement HR policies and procedures.
          </li>
          <li className="flex items-center mt-2">
            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            Collaborate with teams to enhance employee engagement.
          </li>
        </ul>
        <p className="text-gray-700 mt-4">
          To apply, send your resume and a cover letter to <a href="mailto:email@example.com"
            className="text-blue-500">epicsolutions08@gmail.com</a>.
        </p>
      </div>
    </div>
  )
}

export default Carrer