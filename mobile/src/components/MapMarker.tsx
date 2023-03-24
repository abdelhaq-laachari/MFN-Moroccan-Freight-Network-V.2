import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, {  Marker as Marker } from "react-native-maps";
import axios from "axios";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { Linking } from "react-native";

interface Company {
  _id: string;
  latitude: string;
  longitude: string;
  phoneNumber: string;
  email: string;
  companyName: string;
  companyAddress: string;
}

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const initial_location = {
  latitude: 32.29496475761959,
  longitude: -9.234702467931514,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const Map = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [id, setId] = useState<string | null>(null);
  const [company, setCompany] = useState<Company | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const apiUrl = Constants?.expoConfig?.extra?.apiUrl;

  useEffect(() => {
    axios
      .get(`${apiUrl}/company/`)
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => console.log("error " + error));
  }, [apiUrl]);

  const markers = companies.map((company) => (
    <Marker
      key={company._id}
      coordinate={{
        latitude: Number(company.latitude),
        longitude: Number(company.longitude),
      }}
      onPress={() => {
        setId(company._id);
        setCompany(company);
        setOpen(true);
      }}
    />
  ));

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1, width: Dimensions.get("window").width }}
        initialRegion={initial_location}
      >
        {markers}
      </MapView>
      {open && (
        <Modal visible={open} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.informationContainer}>
              {/* company name row */}
              <View style={styles.nameContainer}>
                <Ionicons name="business-outline" size={30} color="black" />
                <Text style={styles.informationTitle}>Company Name:</Text>
                <Text style={styles.informationText}>
                  {company?.companyName ? company.companyName : "No name"}
                </Text>
              </View>
              {/* phone number row */}
              <View style={styles.nameContainer}>
                <Ionicons name="call-outline" size={30} color="black" />
                <Text style={styles.informationTitle}>Phone Number:</Text>
                <Text style={styles.informationText}>
                  {company?.phoneNumber ? company.phoneNumber : "No number"}
                </Text>
              </View>
              {/* email row */}
              <View style={styles.nameContainer}>
                <Ionicons name="mail-outline" size={30} color="black" />
                <Text style={styles.informationTitle}>Email:</Text>
                <Text style={styles.informationText}>
                  {company?.email ? company.email : "No email"}
                </Text>
              </View>
              {/* address row */}
              <View style={styles.nameContainer}>
                <Ionicons name="location-outline" size={30} color="black" />
                <Text style={styles.informationTitle}>Address:</Text>
                <Text style={styles.informationText}>
                  {company?.companyAddress
                    ? company.companyAddress
                    : "No address"}
                </Text>
              </View>
            </View>
            {/* call button in the middle */}
            <TouchableOpacity
              onPress={() => Linking.openURL(`tel:${company?.phoneNumber}`)}
              style={styles.guestButton}
            >
              <Text style={styles.buttonText}>
                <Ionicons name="call-outline" size={30} color="white" />
              </Text>
            </TouchableOpacity>

            {/* close Button */}
            <TouchableOpacity
              onPress={() => setOpen(false)}
              style={styles.closeButton}
            >
              <Ionicons name="close-outline" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  guestButton: {
    backgroundColor: "#F16737",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    gap: 10,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  informationContainer: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  informationTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  informationText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Map;
