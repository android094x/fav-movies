import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { db } from "../firebase";

const FavMoviesContext = createContext();

const useFavMovies = () => {
  return useContext(FavMoviesContext);
};

const FavMoviesProvider = ({ children }) => {
  const [favMovies, setFavMovies] = useState([]);
  const [favMoviesIds, setFavMoviesIds] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    getFavMovies();
  }, []);

  useEffect(() => {
    if (favMovies !== null)
      setFavMoviesIds(favMovies.map((favMovie) => favMovie.id));
  }, [favMovies]);

  const getFavMovies = async () => {
    const docs = [];
    await db
      .collection("favmovies")
      .where("userId", "==", currentUser.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          docs.push({ ...doc.data(), id: doc.id });
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    setFavMovies(docs);
    // const querySnapshot = await db.collection("favmovies").get();
    // querySnapshot.forEach((doc) => {
    //   docs.push({ ...doc.data(), id: doc.id });
    // });
  };

  const addFavMovie = async (favMovie, id) => {
    try {
      await db.collection("favmovies").doc(id).set(favMovie);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFavMovie = async (id) => {
    try {
      await db.collection("favmovies").doc(id).delete();
      getFavMovies();
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    favMoviesIds,
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
