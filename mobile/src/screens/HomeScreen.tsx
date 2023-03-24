import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import Marker from "../components/MapMarker";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Marker />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
