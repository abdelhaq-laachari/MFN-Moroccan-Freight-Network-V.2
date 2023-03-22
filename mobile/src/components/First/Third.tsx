import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
} from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  formData: {
    longitude: string;
    latitude: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      longitude: string;
      latitude: string;
    }>
  >;
  errors: {
    longitude: string;
    latitude: string;
  };
}

interface Coordinate {
  latitude: number;
  longitude: number;
}

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Third: React.FC<Props> = ({ formData, setFormData, errors }) => {
  const [markerCoordinates, setMarkerCoordinates] = useState<Coordinate | null>(
    null
  );

  const [openMap, setOpenMap] = useState<boolean>(false);

  const initial_location = {
    latitude: 32.29496475761959,
    longitude: -9.234702467931514,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  const handleMapPress = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarkerCoordinates({ latitude, longitude });
    setFormData({
      ...formData,
      latitude: latitude.toString(),
      longitude: longitude.toString(),
    });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Company location on map</Text>
          <Text style={styles.subtitle}>
            Please select a location on the map to indicate the location of your
            company.
          </Text>
        </View>
        <View style={styles.guestButtonContainer}>
          <TouchableOpacity
            onPress={() => setOpenMap(true)}
            style={styles.guestButton}
          >
            <Text style={styles.buttonText}>
              <Ionicons name="map-outline" size={24} color="white" />
              Select
            </Text>
          </TouchableOpacity>
        </View>
        {errors.longitude ? (
          <Text style={{ color: "red" }}>{errors.longitude}</Text>
        ) : null}
      </View>
      <Modal visible={openMap} animationType="slide">
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            // style={{ width: 300, height: 300 }}
            initialRegion={initial_location}
            onPress={handleMapPress}
          >
            {markerCoordinates && (
              <Marker
                coordinate={markerCoordinates}
                title="Selected Location"
              />
            )}
          </MapView>
          <TouchableOpacity
            onPress={() => setOpenMap(false)}
            style={styles.closeButton}
          >
            <Ionicons name="close-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </Modal>
    </>
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
  map: {
    width: "100%",
    height: "100%",
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
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  wrapper: {
    width: "80%",
    alignItems: "center",
  },
  guestButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
    width: "100%",
    marginBottom: 20,
  },
  guestButton: {
    backgroundColor: "#F16737",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
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
    color: "#222",
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
    gap: 10,
  },
});

export default Third;
