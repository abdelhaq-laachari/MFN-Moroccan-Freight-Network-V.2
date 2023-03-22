import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  formData: {
    email: string;
    password: string;
    password2: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      password2: string;
    }>
  >;
  errors: {
    email: string;
    password: string;
    password2: string;
  };
}

const Fourth: React.FC<Props> = ({ formData, setFormData, errors }) => {
  const [showFirstPassword, setShowFirstPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowFirstPassword = () => {
    setShowFirstPassword(!showFirstPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Login Information</Text>
      </View>
      <View style={styles.wrapper}>
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
        {errors.email ? (
          <Text style={{ color: "red" }}>{errors.email}</Text>
        ) : null}
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
          <TouchableOpacity onPress={toggleShowFirstPassword}>
            <MaterialIcons
              name={showFirstPassword ? "visibility-off" : "visibility"}
              size={24}
              color="#666666"
            />
          </TouchableOpacity>
        </View>
        {errors.password ? (
          <Text style={{ color: "red" }}>{errors.password}</Text>
        ) : null}
        {/* confirm password  */}
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.buttonInput}
            placeholder="Password"
            secureTextEntry={!showPassword}
            onChangeText={(value) =>
              setFormData({
                ...formData,
                password2: value,
              })
            }
            value={formData.password2}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <MaterialIcons
              name={showPassword ? "visibility-off" : "visibility"}
              size={24}
              color="#666666"
            />
          </TouchableOpacity>
        </View>
        {errors.password2 ? (
          <Text style={{ color: "red" }}>{errors.password2}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
    padding: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#CCCCCC",
    marginBottom: 16,
  },
  buttonInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 20,
  },
  wrapper: {
    width: "80%",
    alignItems: "center",
  },
  input: {
    marginVertical: 12,
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    fontSize: 16,
    shadowColor: "#000",
  },
  link: {
    color: "#1E90FF",
    fontWeight: "bold",
    marginLeft: 5,
  },
  button: {
    marginTop: 24,
    width: "100%",
    padding: 14,
    backgroundColor: "#1E90FF",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Fourth;
