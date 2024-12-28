"use client"
import Image from "next/image";
const HeroAbout = () => {
    return <>
        <section className="bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 space-y-10 md:space-y-0 mt-9">
          
           
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-7xl md:text-9xl font-semibold  mb-4">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#DB4437]">D</span>
                    <span className="text-[#F4B400]">G</span>
                    <span className="italic text-sm md:text-xl text-[#4285F4] ">on campus <span className="text-[#0F9D58]">ZCOER</span></span></h1>
                <p class=" text-[#0F9D58] font-bold text-2xl  md:text-4xl mt-7 leading-tight">
                   <span className="text-[#4285F4]">Code</span>.
                   <span className="text-[#DB4437]">Collaborate</span>.
                   <span className="text-[#F4B400]">Create</span>.
                </p>
                <p class="text-xl mt-3 font-semibold leading-relaxed">
                    Welcome to the Future of Innovation at GDG on Campus ZCOER..!
                </p>
                
                <div className="flex gap-3 justify-center md:justify-start">
                    <button className="mt-6 bg-[#4285F4] text-white py-3 px-8 rounded-xl font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2  focus:ring-opacity-75">
                        Join Us
                    </button>
                    <button className=" mt-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-8 border border-blue-500 hover:border-transparent rounded-xl">
                        Check More
                    </button>
                </div>
            </div>


            <div className="md:w-1/2 flex justify-center">
                <Image
                    src="/Inspiration.png"
                    alt="Illustration"
                    width={600}
                    height={600}
                    className="max-w-full h-auto"
                />
            </div>
        </section>
    </>
}

export default HeroAbout;