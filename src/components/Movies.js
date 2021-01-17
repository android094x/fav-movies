import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFavMovies } from "../contexts/FavMoviesContext";
import { useAuth } from "../contexts/AuthContext";

import Movie from "./Movie";
import Search from "./Search";

const Movies = () => {
  const { favMoviesIds, getFavMovies } = useFavMovies();
  const { currentUser } = useAuth();
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
        getFavMovies();
        if (data.Search) {
          setSearchedMovies(data.Search);
        }
        setMessage(`${data.Error} :(`);
      } catch (err) {
        console.log(err);
      }
    };
    if (searchTerm) {
      getFavMovies();
      fetchData();
    }
  }, [searchTerm]);

  const renderMovies =
    searchedMovies.length !== 0 &&
    searchedMovies.map((movie) => {
      let inFavMovies;
      if (favMoviesIds !== 0) {
        for (let id of favMoviesIds) {
          if (id === movie.imdbID + currentUser.uid)
            return (
              <Movie
                key={movie.imdbID + currentUser.uid}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                id={movie.imdbID + currentUser.uid}
                inFavMovies={true}
                uid={currentUser.uid}
              />
            );
        }
      }
      return (
        <Movie
          key={movie.imdbID + currentUser.uid}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
          id={movie.imdbID + currentUser.uid}
          inFavMovies={inFavMovies}
          uid={currentUser.uid}
        />
      );
    });

  return (
    <div className="flex flex-col mt-8">
      <Search onChangeSearchTerm={setSearchTerm} />
      <div className="container mx-auto flex flex-col items-center justify-center sm:flex-row sm:flex-wrap">
        {renderMovies ? (
          renderMovies
        ) : (
          <h3 className="text-2xl text-white p-6">{message}</h3>
        )}
      </div>
    </div>
  );
};

export default Movies;
