import React, { useState } from "react";

const Search = ({ onChangeSearchTerm }) => {
  const [tempSearchTerm, setTempSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tempSearchTerm) {
      onChangeSearchTerm(tempSearchTerm);
      setTempSearchTerm("");
    } else alert(`Search for a movie!`);
  };

  const handleChange = (e) => {
    setTempSearchTerm(e.target.value);
  };

  return (
    <form
      className="flex items-center justify-center w-full mb-8"
      onSubmit={handleSubmit}
    >
      <input
        id="search"
        className="focus:outline-none rounded-l-full py-4 px-6 w-72 text-2xl"
        type="text"
        placeholder="search a movie..."
        onChange={handleChange}
        value={tempSearchTerm}
      />
      <button className="focus:outline-none	py-4 px-6 bg-red-500 rounded-r-full hover:bg-red-400">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </form>
  );
};

export default Search;
