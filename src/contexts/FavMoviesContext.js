import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase";

const FavMoviesContext = createContext();

const useFavMovies = () => {
  return useContext(FavMoviesContext);
};

const FavMoviesProvider = ({ children }) => {
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    const initialFetch = async () => {
      const docs = [];
      const querySnapshot = await db.collection("favmovies").get();
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setFavMovies(docs);
    };

    initialFetch();
  }, []);

  const getFavMovies = async () => {
    const newNotes = [];
    const querySnapshot = await db.collection("favmovies").get();
    querySnapshot.forEach((doc) => {
      newNotes.push(doc.data());
    });
    setFavMovies(newNotes);
  };

  const addFavMovie = async (favMovie) => {
    try {
      await db.collection("favmovies").doc().set(favMovie);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFavMovie = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this movie from your Favs?"
      )
    ) {
      await db.collection("favmovies").doc(id).delete();
    }
  };

  const value = {
    favMovies,
    addFavMovie,
    deleteFavMovie,
    getFavMovies,
  };

  return (
    <FavMoviesContext.Provider value={value}>
      {children}
    </FavMoviesContext.Provider>
  );
};

export { FavMoviesProvider, useFavMovies };
