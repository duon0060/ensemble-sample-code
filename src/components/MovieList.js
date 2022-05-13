import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  return (
    <View style={styles.listContainer}>
      <MovieCard />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "orange",
  },
});
