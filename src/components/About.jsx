import React from "react";

function About() {
  return (
    <>
      <section
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-100"
      >
        <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-6">
            <p className="text-3xl font-bold inline border-b-[4px]  text-gray-300 hover:text-red-500  ">
              About
            </p>
          </div>
          <article>
            Hi there! 👋 I'm Eugene, a passionate upcominng web developer and software engineer
            diving into the exciting world of technology. My journey began just
            over a year ago, and since then, I've been captivated by the endless
            possibilities that coding offers. With a focus on React, HTML, CSS,
            and JavaScript, I've been steadily honing my skills, exploring new
            concepts, and building projects that challenge and inspire me. From
            crafting responsive user interfaces to delving into the intricacies
            of state management, every line of code I write is a step towards
            mastering my craft.
          </article>
          <br />
          <article>
          I'm open to learning new things and recognize that the journey of programming can be intimidating at times. That's why I'm also actively seeking guidance and mentorship to help navigate this exciting yet sometimes daunting path. I believe in the power of community and collaboration, and I'm eager to connect with experienced developers who can offer insights, support, and encouragement along the way.
         
          </article>
        </div>
      </section>
    </>
  );
}

export default About;
