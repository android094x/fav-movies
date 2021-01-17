import React, { useEffect } from "react";
import { useFavMovies } from "../contexts/FavMoviesContext";
import { useAuth } from "../contexts/AuthContext";

import Movie from "./Movie";

const Nominees = () => {
  const { favMovies, getFavMovies } = useFavMovies();
  const { currentUser } = useAuth();

  useEffect(() => {
    getFavMovies();
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center sm:flex-row sm:flex-wrap pt-20">
      {favMovies.length !== 0 &&
        favMovies.map(
          (movie) =>
            currentUser.uid === movie.userId && (
              <Movie
                key={movie.id}
                title={movie.title}
                year={movie.year}
                poster={movie.poster}
                id={movie.id}
                inFavMovies={true}
              />
            )
        )}
    </div>
  );
};

export default Nominees;
