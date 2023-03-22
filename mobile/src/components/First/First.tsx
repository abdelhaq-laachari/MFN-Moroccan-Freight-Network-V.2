import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface FirstProps {
  formData: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      firstName: string;
      lastName: string;
      phoneNumber: string;
    }>
  >;
  errors: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
}

const First: React.FC<FirstProps> = ({ formData, setFormData, errors }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Personal Information</Text>
      </View>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          onChangeText={(value) =>
            setFormData({
              ...formData,
              firstName: value,
            })
          }
          value={formData.firstName}
          placeholder="First Name"
        />
        {errors.firstName ? (
          <Text style={{ color: "red" }}>{errors.firstName}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          onChangeText={(value) =>
            setFormData({
              ...formData,
              lastName: value,
            })
          }
          value={formData.lastName}
          placeholder="Last Name"
        />
        {errors.lastName ? (
          <Text style={{ color: "red" }}>{errors.lastName}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          onChangeText={(value) =>
            setFormData({
              ...formData,
              phoneNumber: value,
            })
          }
          value={formData.phoneNumber}
          placeholder="Phone Number"
        />
        {errors.phoneNumber ? (
          <Text style={{ color: "red" }}>{errors.phoneNumber}</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
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

export default First;
