import React, { useContext } from "react";

import { MovieList } from "../components/MovieList";
import { SearchBarComponent } from "../components/SearchBarComponent";

export const HomeScreen = () => {
  return (
    <>
      <SearchBarComponent />
      <MovieList />
    </>
  );
};
