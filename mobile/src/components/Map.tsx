import React, { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface MapProps {
  onLocationSelect: (location: { longitude: number; latitude: number }) => void;
}

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const initial_location: Region = {
  latitude: 32.29496475761959,
  longitude: -9.234702467931514,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const Map: React.FC<MapProps> = ({ onLocationSelect }) => {
  const [region, setRegion] = useState<Region>({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [markerCoordinates, setMarkerCoordinates] = useState<Coordinate | null>(
    null
  );

  const handleMapPress = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarkerCoordinates({ latitude, longitude });
  };
//   console.log(markerCoordinates?.latitude);

  return (
    <View>
      <Text>Map</Text>
      <MapView
        style={{ width: 300, height: 300 }}
        initialRegion={initial_location}
        onRegionChangeComplete={(region: Region) => setRegion(region)}
        onPress={handleMapPress}
      >
        {markerCoordinates && (
          <Marker coordinate={markerCoordinates} title="Selected Location" />
        )}
      </MapView>
      {/* <Text>{markerCoordinates?.latitude}</Text>
      <Text>{markerCoordinates?.longitude}</Text> */}
    </View>
  );
};

export default Map;
