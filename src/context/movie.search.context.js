import React, { createContext, useState, useEffect } from "react";
import { getMoviesByTitle } from "../services/movies.services";

export const MovieSearchContext = createContext();

export const MovieSearchContextProvider = ({ children }) => {
  const [movieSearch, setMovieSearch] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(searchTerm);
  const retrieveMovie = () => {
    setIsLoading(true);
    setError(null);
    setTimeout(() => {
      if (searchTerm) {
        getMoviesByTitle(searchTerm)
          .then((movie) => {
            setIsLoading(false);
            setMovieSearch(movie);
          })
          .catch((err) => {
            setIsLoading(false);
            setError(err);
          });
      }
    }, 2000);
  };

  useEffect(() => {
    retrieveMovie();
  }, [searchTerm]);

  return (
    <MovieSearchContext.Provider
      value={{ movieSearch, isLoading, error, searchTerm, setSearchTerm }}
    >
      {children}
    </MovieSearchContext.Provider>
  );
};
