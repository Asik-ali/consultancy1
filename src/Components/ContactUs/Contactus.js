import React, { useEffect } from "react";
import { IoCallSharp } from "react-icons/io5";
import Newsletter from "../newsletter/NewsLetter";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contactus() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Set whether animation should only happen once
    });
  }, []);
  return (
    <div>
      <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="bg-gradient-to-b from-blue-500 to-black h-[400px] overflow-hidden ">
        <div className="flex flex-col-reverse lg:flex-row justify-between lg:gap-2">
          <div className=" justify-center  lg:ps-10 flex flex-col gap-6">
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
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="mt-10 flex flex-col lg:flex-row justify-evenly gap-6 lg:gap-0 px-4 lg:px-0">
        <div className="flex flex-col justify-center items-center text-center lg:text-start ">
          <span className="text-2xl  font-[poppins] font-bold ">
            How can we help?
          </span>
          <p className="font-[ralewy]  mt-2">
            Fill out this form or contact your local office.
          </p>
          <form className="flex flex-col gap-8 mt-5">
            <input
              type="text"
              className="border-2 w-[300px] h-[39px] placeholder:font-[poppins] placeholder:text-black border-gray-400 shadow"
              placeholder="Name"
            />
            <input
              type="email"
              className="border-2 w-[300px] h-[39px] placeholder:font-[poppins] placeholder:text-black border-gray-400 shadow"
              placeholder="Email"
            />
            <input
              type="number"
              className="border-2 w-[300px] h-[39px] placeholder:font-[poppins] placeholder:text-black border-gray-400 shadow"
              placeholder="Number"
            />
            <textarea
              rows={5}
              cols={40}
              placeholder="Message"
              className=" placeholder:font-[poppins] w-[300px] placeholder:text-black border-gray-400 shadow px-4 pt-4"
            ></textarea>
            <div className="mx-auto">
              <button
                type="submit"
                className="bg-black text-white hover:bg-blue-600 transition-all duration-500 hover:text-black px-7 py-2"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="bg-[#222222] lg:w-[400px] border-b-4 border-[#26ACE2]">
          <div className="text-white ps-6 p-4 pt-4 flex flex-col gap-8 justify-center ">
            <div>
              <span className="text-2xl pt-4 font-[poppins] font-bold ">
                Give Us a Call
              </span>
              <ul className="mt-3">
                <li className="flex items-center gap-3  ">
                  <IoCallSharp className="text-[#26ACE2] " />{" "}
                  Epic-Solutions - 8097061134
                </li>
              </ul>
            </div>
            <div>
              <span className="text-2xl pt-4 font-[poppins] font-bold ">
                Business Hours
              </span>
              <ul className="mt-3">
                <li className="  ">Monday – Friday 8am to 12pm</li>
                <li className="  ">Saturday – Sunday 24 Hours</li>
              </ul>
            </div>
            <div>
              <span className="text-2xl pt-4 font-[poppins] font-bold ">
                Social
              </span>
              <ul className="mt-3 flex gap-6">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-[#26ACE2] transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-[#26ACE2] transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-[#26ACE2] transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>

                

                
              </ul>
            </div>
            <div>
              <span className="text-2xl pt-4 font-[poppins] font-bold ">
                ADDRESS
              </span>
              <ul className="mt-3">
                <li className="  ">M.k Park,2nd FLoor</li>
                <li className="  ">Room-211, Near-Noor-Ala-Noor Masjid</li>
                <li className="  ">Naupada Bandra East,Mumbai -400051</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Newsletter/>
    </div>
  );
}

export default Contactus;
