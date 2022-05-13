import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { MovieSearchContext } from "../context/movie.search.context";
import { Loader } from "./Loader";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  const { isLoading } = useContext(MovieSearchContext);
  return (
    <View style={styles.listContainer}>
      {isLoading ? <Loader /> : <MovieCard />}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
