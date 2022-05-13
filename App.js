import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { HomeScreen } from "./src/screens/HomeScreen";
import { MovieSearchContextProvider } from "./src/context/movie.search.context";

export default function App() {
  return (
    <>
      <MovieSearchContextProvider>
        <SafeAreaView style={styles.container}>
          <HomeScreen />
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
