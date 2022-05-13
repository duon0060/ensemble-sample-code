import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { MovieList } from "./src/components/MovieList";
import { SearchBarComponent } from "./src/components/SearchBarComponent";
import { MovieSearchContextProvider } from "./src/context/movie.search.context";

export default function App() {
  return (
    <>
      <MovieSearchContextProvider>
        <SafeAreaView style={styles.container}>
          <SearchBarComponent />
          <MovieList />
        </SafeAreaView>

        <StatusBar style="auto" />
      </MovieSearchContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
