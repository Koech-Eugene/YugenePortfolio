import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNave] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
   
    {
      id: 3,
      link: "technologies",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <header>
      <nav className="flex justify-between items-center w-full h-20 bg-black text-white fixed">
        <div>
          <Link to="home" smooth duration={500}>
          <h1 className="text-3xl">Eugene</h1>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="cursor-pointer px-4 capitalize font-semibold text-gray-600 hover:text-red-500 hover:scale-110 duration-200 "
              >
                <Link to={link} smooth duration={500}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="cursor-pointer pr-4 z-10 text-gray-200 md:hidden"
          onClick={() => setNave(!nav)}
        >
          {nav ? <IoClose size={30} /> : <IoMenu size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center top-0 right-0 w-[250px] h-[400px] absolute bg-gradient-to-b from-black to-gray-800 text-gray-300">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer py-3 text-2xl capitalize"
              >
                <Link to={link} smooth duration={500}>{link}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
