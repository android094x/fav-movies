import React from "react";

const Movie = ({ poster, title, year }) => {
  return (
    <div className="flex flex-col justify-center items-center w-56 lg:w-72 pt-4 sm:px-4 text-white">
      <img src={poster} alt="" className="max-h-80" />
      <div className="h-24 w-56">
        <h4 className="text-sm font-black py-2">{title}</h4>
        <div className="flex justify-between items-center">
          <span className="text-xs tracking-wider	text-gray-500">{year}</span>
          <svg
            className="w-6 h-6 text-red-500 fill-current cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Movie;
