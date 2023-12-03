import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Newsletter = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Set the animation duration
          once: true, // Set whether animation should only happen once
        });
      }, []);
    return (
        <section 
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
        className="items-center mt-12  mx-auto px-4 gap-4 md:flex md:px-8 xl:gap-12 bg-[#F0F0F0] pt-20 pb-20 ">
            <div className="flex-1 space-y-3">
                <h3 className="text-2xl text-gray-800 font-bold lg:text-3xl">
                    Subscribe to our Newsletter
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.
                </p>
            </div>
            <div className="mt-6 flex-1">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="items-center justify-center sm:flex">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
                    />
                    <button
                        className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="mt-3 text-[15px] text-gray-400">
                    Product updates, announcements, and discounts.
                    Read our <a className="text-indigo-600 underline" href="javascript:void(0)"> Privacy Policy </a>
                </p>
            </div>
        </section>
    )
}
export default Newsletter