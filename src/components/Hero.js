import React from "react";
import { HashLink } from "react-router-hash-link";

import heroImg from "../assets/bg-hero.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
      }}
      className="h-screen flex flex-col justify-center items-center"
    >
      <h4 className="text-white lg:text-7xl md:text-5xl sm:text-3xl text-lg">
        Search for your
      </h4>
      <h1 className="text-white lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
        FavMoives
      </h1>
      <HashLink
        to="/#search"
        className="flex items-center py-6 px-10 bg-red-500 rounded-full text-2xl cursor-pointer hover:bg-red-400 transition duration-300 ease-in-out animate-bounce"
      >
        Search now
        <svg
          className="w-6 h-6 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </HashLink>
    </div>
  );
};

export default Hero;
