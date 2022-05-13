import React, { useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { MovieSearchContext } from "../context/movie.search.context";

export const SearchBarComponent = () => {
  const { searchTerm, setSearchTerm } = useContext(MovieSearchContext);
  const [keyword, setKeyword] = useState(searchTerm);

  return (
    <View style={styles.searchContainer}>
      <Searchbar
        placeholder="Search movie title"
        onChangeText={setKeyword}
        onSubmitEditing={() => {
          setSearchTerm(keyword);
        }}
        value={keyword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    padding: 16,
  },
});
