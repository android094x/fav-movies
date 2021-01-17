import React, { useState, useEffect } from "react";
import axios from "axios";

import Movie from "./Movie";
import Search from "./Search";

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("Search for a movie!!!");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://www.omdbapi.com/?apikey=8a74ec88&type=movie&s=${searchTerm}`
        );
        setSearchedMovies([]);
        if (data.Search) {
          setSearchedMovies(data.Search);
        }
        setMessage(`${data.Error} :(`);
      } catch (err) {
        console.log(err);
      }
    };
    if (searchTerm) fetchData();
  }, [searchTerm]);

  return (
    <div className="flex flex-col mt-8">
      <Search onChangeSearchTerm={setSearchTerm} />
      <div className="container mx-auto flex flex-col items-center justify-center sm:flex-row sm:flex-wrap">
        {searchedMovies.length !== 0 ? (
          searchedMovies.map(
            (movie) =>
              movie.Poster !== "N/A" && (
                <Movie
                  key={movie.Year + movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                />
              )
          )
        ) : (
          <h3 className="text-2xl text-white p-6">{message}</h3>
        )}
      </div>
    </div>
  );
};

export default Movies;
