import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import First from "./First/First";
import SecondStep from "./First/Second";
import ThirdStep from "./First/Third";
import FourthStep from "./First/Fourth";
import axios from "axios";
import Constants from "expo-constants";
// import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from "@react-navigation/core";
import { ParamListBase } from "@react-navigation/routers";

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  companyName: string;
  companyNumber: string;
  companyAddress: string;
  email: string;
  password: string;
  password2: string;
  longitude: string;
  latitude: string;
}
interface FormErrors {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  companyName?: string;
  companyNumber?: string;
  companyAddress?: string;
  email?: string;
  password?: string;
  password2?: string;
  longitude?: string;
  latitude?: string;
}

export default function Form({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
})  {
  const [page, setPage] = useState(0);

  // const navigation = useNavigation();

  const apiUrl = Constants?.manifest?.extra?.apiUrl;

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    companyName: "",
    companyNumber: "",
    companyAddress: "",
    email: "",
    password: "",
    password2: "",
    longitude: "",
    latitude: "",
  });

  const [errors, setErrors] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    companyName: "",
    companyNumber: "",
    companyAddress: "",
    email: "",
    password: "",
    password2: "",
    longitude: "",
    latitude: "",
  } as FormData);

  const buttonText = page === 0 || page === 1 || page === 2 ? "Next" : "Submit";

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return (
          <First
            formData={formData}
            setFormData={
              setFormData as React.Dispatch<
                React.SetStateAction<{
                  firstName: string;
                  lastName: string;
                  phoneNumber: string;
                }>
              >
            }
            errors={errors}
          />
        );
      case 1:
        return (
          <SecondStep
            formData={formData}
            setFormData={
              setFormData as React.Dispatch<
                React.SetStateAction<{
                  companyName: string;
                  companyNumber: string;
                  companyAddress: string;
                }>
              >
            }
            errors={errors}
          />
        );
      case 2:
        return (
          <ThirdStep
            formData={formData}
            setFormData={
              setFormData as React.Dispatch<
                React.SetStateAction<{
                  longitude: string;
                  latitude: string;
                }>
              >
            }
            errors={errors}
          />
        );
      case 3:
        return (
          <FourthStep
            formData={formData}
            setFormData={
              setFormData as React.Dispatch<
                React.SetStateAction<{
                  email: string;
                  password: string;
                  password2: string;
                }>
              >
            }
            errors={errors}
          />
        );
      default:
        return (
          <First
            formData={formData}
            setFormData={
              setFormData as React.Dispatch<
                React.SetStateAction<{
                  firstName: string;
                  lastName: string;
                  phoneNumber: string;
                }>
              >
            }
            errors={errors}
          />
        );
    }
  };

  function handleSubmit() {
    let errors: FormErrors = {};
    if (page === 0) {
      if (!formData.firstName) {
        errors.firstName = "First name is required";
        setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
        return;
      } else if (!formData.firstName.match(/^[a-zA-Z]+$/)) {
        errors.firstName = "First name must be letters only";
        setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
        return;
      } else {
        errors.firstName = "";
      }
      if (!formData.lastName) {
        errors.lastName = "Last name is required";
        setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
        return;
      } else if (!formData.lastName.match(/^[a-zA-Z]+$/)) {
        errors.lastName = "Last name must be letters only";
        setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
        return;
      } else {
        errors.lastName = "";
      }
      if (!formData.phoneNumber) {
        errors.phoneNumber = "Phone number is required";
        setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
        return;
      } else if (!formData.phoneNumber.match(/^[0-9]+$/)) {
        errors.phoneNumber = "Phone number must be 10 digits";
        setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
        return;
      } else {
        errors.phoneNumber = "";
      }
      setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
      setPage(page + 1);
    }
    if (page === 1) {
      if (!formData.companyName) {
        errors.companyName = "Company name is required";
        setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
        return;
      } else {
        errors.companyName = "";
      }
      if (!formData.companyNumber) {
        errors.companyNumber = "Company number is required";
        setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
        return;
      } else if (!formData.companyNumber.match(/^[0-9]+$/)) {
        errors.companyNumber = "Company number must be numbers only";
        setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
        return;
      } else {
        errors.companyNumber = "";
      }
      if (!formData.companyAddress) {
        errors.companyAddress = "Phone number is required";
        setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
        return;
      } else {
        errors.companyAddress = "";
      }
      setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
      setPage(page + 1);
    }
    if (page === 2) {
      if (!formData.longitude || !formData.latitude) {
        errors.longitude = "Please select a location";
        setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
        return;
      } else {
        errors.longitude = "";
      }
      setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
      setPage(page + 1);
    }
    if (page === 3) {
      if (!formData.email) {
        errors.email = "Email is required";
        setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
        return;
      } else if (!formData.email.match(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/)) {
        errors.email = "Please enter a valid email";
        setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
        return;
      } else {
        errors.email = "";
      }
      if (!formData.password) {
        errors.password = "Password is required";
        setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
        return;
      } else {
        errors.password = "";
      }
      if (!formData.password2) {
        errors.password2 = "Phone number is required";
        setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
        return;
      } else if (formData.password2 !== formData.password) {
        errors.password2 = "Passwords do not match";
        setErrors((prevFormData) => ({ ...prevFormData, ...errors }));
        return;
      } else {
        errors.password2 = "";
      }
      handleRegister();
    }
  }

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${apiUrl}/company/register`, formData);
      if (res.status === 201) {
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          companyName: "",
          companyNumber: "",
          companyAddress: "",
          email: "",
          password: "",
          password2: "",
        } as FormData);
        navigation.navigate("LoginScreen");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        {conditionalComponent()}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            {page > 0 ? (
              <TouchableOpacity
                onPress={() => setPage(page - 1)}
                style={[styles.backButton, styles.button]}
              >
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                disabled={true}
                style={[styles.disableButton, styles.button]}
              >
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={handleSubmit}
              style={[styles.nextButton, styles.button]}
            >
              <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: "#a9a9a9",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    borderRadius: 8,
    borderWidth: 0,
    boxSizing: "border-box",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    listStyle: "none",
    margin: 0,
    outline: "none",
    paddingVertical: 10,
    paddingHorizontal: 16,
    position: "relative",
    textAlign: "center",
    textDecorationLine: "none",
    transitionProperty: "color",
    transitionDuration: 100,
    verticalAlign: "baseline",
    userSelect: "none",
    touchAction: "manipulation",
  },
  buttonHover: {
    backgroundColor: "#F082AC",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  disableButton: {
    backgroundColor: "#333333",
  },
  nextButton: {
    backgroundColor: "#F16767",
  },
  backButton: {
    backgroundColor: "#F16767",
  },
});
