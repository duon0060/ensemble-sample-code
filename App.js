import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { MovieList } from "./src/components/MovieList";
import { SearchBarComponent } from "./src/components/SearchBarComponent";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <SearchBarComponent />
        <MovieList />
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
