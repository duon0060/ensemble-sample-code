import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, Button } from "react-native-paper";

export const MovieCard = () => {
  const [movies, setMovies] = useState(null);

  return (
    <View style={styles.cardContainer}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Title title="Star War" subtitle={`Year of Release: ${1992}`} />
        <Card.Actions style={{ alignSelf: "flex-end" }}>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
});
