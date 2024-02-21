import React from "react";
import image from "../assets/Eugene.jpg";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";

function Hero() {
  return (
    <>
      <section
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-red-500 pb-2 text-3xl md:text-5xl">
              I'm a Software development student
            </h2>
            <p className="text-gray-200 py-4 max-w-md">
              Passionate about web development and software engineering eager to learn, grow, and
              collaborate. Thriving on creativity and innovation in the tech
              world.
            </p>
            <div>
              <Link to="technologies" smooth duration={500} className="text-white w-fit px-6 py-2 rounded flex items-center bg-red-500 hover:-translate-y-0.5">
                Technologies{" "}
                <span className="ml-2 hover:translate-y-1 duration-200">
                  <FaArrowDown />
                </span>
              </Link>
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
