import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { NavigationProp } from "@react-navigation/core";
import { ParamListBase } from "@react-navigation/routers";
import axios from "axios";
import Constants from "expo-constants";

interface FormData {
  email: string;
  password: string;
}

export default function LoginScreen({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [showFirstPassword, setShowFirstPassword] = useState(false);

  const showPassword = () => {
    setShowFirstPassword(!showFirstPassword);
  };

  const apiUrl = Constants?.manifest?.extra?.apiUrl;
  
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${apiUrl}/company/login`, {
        email: formData.email,
        password: formData.password,
      });
      // console.log(response.data);
      navigation.navigate("HomeScreen");
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.warper}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Hello Again!</Text>
          <Text style={styles.subtitle}>Welcome Back you've been missed</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.buttonContainer}>
            <TextInput
              style={styles.buttonInput}
              onChangeText={(value) =>
                setFormData({
                  ...formData,
                  email: value,
                })
              }
              value={formData.email}
              placeholder="Email"
            />
          </View>
          <View style={styles.buttonContainer}>
            <TextInput
              style={styles.buttonInput}
              placeholder="Password"
              secureTextEntry={!showFirstPassword}
              onChangeText={(value) =>
                setFormData({
                  ...formData,
                  password: value,
                })
              }
              value={formData.password}
            />
            <TouchableOpacity onPress={showPassword}>
              <MaterialIcons
                name={showFirstPassword ? "visibility-off" : "visibility"}
                size={24}
                color="#666666"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.forgetContainer}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </View>
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>Or continue as a guest</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.guestButtonContainer}>
          <TouchableOpacity style={styles.guestButton}>
            <Text style={styles.buttonText}>Continue as a guest</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate("RegisterScreen")}
              style={styles.registerLink}
            >
              Register
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
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  warper: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#F4EFF3",
    paddingTop: 80,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "20%",
    width: "100%",
    gap: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  subtitle: {
    fontSize: 16,
  },
  inputContainer: {
    alignItems: "center",
    width: "100%",
    gap: 25,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    width: "90%",
    paddingRight: 10,
    borderRadius: 10,
  },
  buttonInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  loginButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#F16767",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgetContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    width: "86%",
  },
  forgotPassword: {
    color: "#666666",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "10%",
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    width: "25%",
  },
  orText: {
    color: "#666666",
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  guestButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
    width: "100%",
  },
  guestButton: {
    backgroundColor: "#F16737",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    height: "14%",
    width: "100%",
  },
  registerText: {
    color: "#666666",
    fontSize: 15,
    fontWeight: "bold",
  },
  registerLink: {
    color: "#F16767",
    fontSize: 15,
    fontWeight: "bold",
  },
});
