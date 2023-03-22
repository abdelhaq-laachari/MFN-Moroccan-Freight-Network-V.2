import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp } from '@react-navigation/core';
import { ParamListBase } from '@react-navigation/routers';

export default function WelcomeScreen({ navigation }: { navigation: NavigationProp<ParamListBase> }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: 350, height: 350, marginBottom: 10 }}
          source={require("../../assets/images/img1.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>MFN Freight Network</Text>
          <Text style={styles.subtitle}>Your Gateway to Moroccan Transit</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text
              onPress={() => navigation.navigate("RegisterScreen")}
              style={[styles.buttonText, styles.registerButton]}
            >
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              onPress={() => navigation.navigate("LoginScreen")}
              style={[styles.buttonText, styles.loginButton]}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  imageContainer: {
    marginTop: 40,
    backgroundColor: "#F16767",
    borderRadius: 40,
    padding: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 5,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "65%",
    justifyContent: "center",
    padding: 2,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    marginHorizontal: 1,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  registerButton: {
    color: "#fff",
    backgroundColor: "#F16767",
    width: 125,
    padding: 12,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  loginButton: {
    color: "#fff",
    backgroundColor: "#F16767",
    width: 125,
    padding: 12,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});
