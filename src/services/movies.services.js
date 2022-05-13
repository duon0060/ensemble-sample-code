import React from "react";

const apiKEY = "d69f9775";
const baseUrl = "http://www.omdbapi.com/?apikey=";

export const getMoviesByTitle = async (title) => {
  const formattedTitle = title.trim();
  const url = `${baseUrl}${apiKEY}&t=${formattedTitle}`;
  console.log(url);

  const response = await fetch(url);

  if (!response) {
    throw new Error("Fetching Error");
  }

  return response.json();
};
