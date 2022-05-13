import React from "react";

const apiKEY = "d69f9775";
const baseUrl = "http://www.omdbapi.com/?apikey=";

export const getMoviesByTitle = async (title) => {
  const formattedTitle = title.trim();
  const url = `${baseUrl}${apiKEY}&t=${formattedTitle}`;
  console.log(url);

  const response = await fetch(url);
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("Fetching Error");
  }

  return {
    title: data.Title,
    year: data.Year,
    poster: data.Poster,
  };
};
