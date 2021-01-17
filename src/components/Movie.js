import React, { useState } from "react";
import { useFavMovies } from "../contexts/FavMoviesContext";

const Movie = ({ poster, title, year, id, inFavMovies, uid }) => {
  const [isAdded, setIsAdded] = useState(inFavMovies);
  const {
    addFavMovie,
    deleteFavMovie,
    getFavMovies,
    favMovies,
  } = useFavMovies();

  const handleClick = async (e) => {
    const data = {
      title: title,
      year: year,
      poster: poster,
      userId: uid,
    };
    if (favMovies.length < 5) {
      if (isAdded) {
        await deleteFavMovie(id);
        setIsAdded(false);
        await getFavMovies();
      } else {
        await addFavMovie(data, id);
        setIsAdded(true);
        await getFavMovies();
      }
    } else if (favMovies.length === 5) {
      if (isAdded) {
        await deleteFavMovie(id);
        setIsAdded(false);
        await getFavMovies();
      } else {
        alert("You've added your 5 movies");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-56 lg:w-72 pt-4 sm:px-4 text-white">
      <img src={poster} alt="" className="max-h-80" />
      <div className="h-24 w-56">
        <h4 className="text-sm font-black py-2">{title}</h4>
        <div className="flex justify-between items-center">
          <span className="text-xs tracking-wider	text-gray-500">{year}</span>
          {isAdded ? (
            <svg
              onClick={handleClick}
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
          ) : (
            <svg
              onClick={handleClick}
              className="w-6 h-6 text-red-500 cursor-pointer"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
