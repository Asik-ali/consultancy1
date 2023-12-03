import React, { useEffect } from 'react'
import img from "../../Assest/Welcome.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
function Welcome() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Set whether animation should only happen once
    });
  }, []);
  return (
    <div data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
     className='mt-10 overflow-x-hidden mb-10'>
        <h1 className='text-center text-3xl lg:text-4xl font-[poppins] px-4'>Welcome To Epic <span className='text-[#1369AA]'>Solutions</span></h1>
       <div className='flex flex-col lg:flex-row lg:mx-4 container px-4 items-center justify-center gap-10  mt-5'>
        <div >
            <img className=' w-[500px] rounded' src={img}/>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-xl font-semibold lg:text-2xl '>Working Together Make Us Strong </h1>
            <div className='lg:w-[600px] mt-7 flex flex-col gap-2 leading-7'>
                <p>EPIC Solutions provides  you with Human Resource Solutions that are well researched.Our team is trained to deliver relevant profiles within tight deadlines.</p>
                <p>Our Recruiter are responsible for designing recruitment plans, advertising needed positions, and interviewing applicants</p>
                <p>Founded in the year 2023, EPIC Solutions provides you with Human Resource Solutions that are well researched. Interviewing and assessing prospective applicants and matching them with vacancies at client companies screening candidates and drawing up shortlists of candidates for clients to interview. organising interviews and selection events. making arrangements for the advertisement of vacancies.</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Welcome