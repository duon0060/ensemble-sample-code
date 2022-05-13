import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { MovieSearchContext } from "../context/movie.search.context";

export const SearchBarComponent = () => {
  const { searchTerm, setSearchTerm } = useContext(MovieSearchContext);

  return (
    <View style={styles.searchContainer}>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => (text.length ? setSearchTerm(text) : null)}
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
