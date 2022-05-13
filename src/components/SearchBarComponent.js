import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { getMoviesByTitle } from "../services/movies.services";

export const SearchBarComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    getMoviesByTitle(searchTerm)
      .then()
      .catch((err) => console.warn(err));
  }, [searchTerm]);

  return (
    <View style={styles.searchContainer}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchTerm}
        value={searchTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    padding: 16,
  },
});
