import React from "react";
import github from "../assets/github.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import js from "../assets/javascript.png";
import reactjs from "../assets/react.png";

function Technologies() {
    const tech = [
        {
            id:1,
            src:github,
            title:"GITHUB",
            style:"shadow-gray-500"
        },
        {
            id:2,
            src:html,
            title:"HTML",
            style:"shadow-orange-500"
        },
        {
            id:3,
            src:css,
            title:"CSS",
            style:"shadow-blue-500"
        },
        {
            id:4,
            src:tailwind,
            title:"TAILWIND",
            style:"shadow-sky-400"
        },
        {
            id:5,
            src:js,
            title:"JS",
            style:"shadow-yellow-500"
        },
        {
            id:6,
            src:reactjs,
            title:"REACT",
            style:"shadow-blue-600"
        }
    ]
  return (
    <>
      <section name="tech" className="bg-gradient-to-b from-gray-900 to to-black w-full h-screen">
        <div className="mx-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-200">
            <div>
                <p className="text-3xl font-bold border-b-4 border-gray-500 p-2 inline">Tech Stack</p>
                <p className="py-6">These are the tools I'm working with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-5 text-center py-8 px-12 md:px-0">
                {tech.map(({id,src,title,style}) => (

                <div key={id}  className={`shadow-lg hover:scale-105 duration-300 py-2 ${style}`}>
                    <img src={src} alt="Github" className=" mx-auto sm:w-20 " />
                    <p className="text-red-500 mt-4">{title}</p>
                </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}

export default Technologies;
