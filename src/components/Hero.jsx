import React from "react";
import image from "../assets/Eugene.jpg";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

function Hero() {
  return (
    <>
      <section name="hero" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-red-500 pb-2 text-3xl md:text-5xl">I'm a Software development student</h2>
            <p className="text-gray-200 py-4 max-w-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              amet nemo recusandae aliquam error quam beatae nihil corporis
              provident illo distinctio accusamus, rem aperiam eligendi nostrum,
              possimus sapiente reprehenderit voluptate
            </p>
            <div>
                <button className="text-white w-fit px-6 py-2 rounded flex items-center bg-red-500 hover:-translate-y-0.5">Porfolio <span className="ml-2 hover:translate-y-1 duration-200"><FaArrowDown/></span></button>
            </div>
          </div>
        {/* <div>
            <img src={image} alt="EugeneKoech" className="rounded-2xl mx-auto md:w-full "/>
        </div> */}
        </div>
      </section>
    </>
  );
}

export default Hero;
