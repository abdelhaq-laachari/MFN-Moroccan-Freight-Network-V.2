import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface Props {
  formData: {
    companyName: string;
    companyNumber: string;
    companyAddress: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      companyName: string;
      companyNumber: string;
      companyAddress: string;
    }>
  >;
  errors: {
    companyName: string;
    companyNumber: string;
    companyAddress: string;
  };
}

const Second: React.FC<Props> = ({ formData, setFormData, errors }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Company Information</Text>
      </View>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          onChangeText={(value) =>
            setFormData({
              ...formData,
              companyName: value,
            })
          }
          value={formData.companyName}
          placeholder="Company Name"
        />
        {errors.companyName ? (
          <Text style={{ color: "red" }}>{errors.companyName}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          onChangeText={(value) =>
            setFormData({
              ...formData,
              companyNumber: value,
            })
          }
          value={formData.companyNumber}
          placeholder="Company Number"
        />
        {errors.companyNumber ? (
          <Text style={{ color: "red" }}>{errors.companyNumber}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          onChangeText={(value) =>
            setFormData({
              ...formData,
              companyAddress: value,
            })
          }
          value={formData.companyAddress}
          placeholder="Company Address"
        />
        {errors.companyAddress ? (
          <Text style={{ color: "red" }}>{errors.companyAddress}</Text>
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

export default Second;
