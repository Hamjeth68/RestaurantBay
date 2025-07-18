import { useState, useEffect } from "react";
import { Platform, Alert, PermissionsAndroid } from "react-native";
import * as Location from "expo-location";
import { Location as LocationType } from "@/types/Location";
export const useLocation = () => {
  const [userLocation, setUserLocation] = useState<LocationType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message:
              "This app needs access to your location to find nearby restaurants.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        } else {
          setError("Location permission denied");
          setUserLocation({ latitude: 25.1411, longitude: 55.1855 }); // Default Dubai location
          setIsLoading(false);
        }
      } catch (err) {
        console.warn(err);
        setError("Failed to request location permission");
        setUserLocation({ latitude: 25.1411, longitude: 55.1855 });
        setIsLoading(false);
      }
    } else {
      getCurrentLocation();
    }
  };

  const getCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Location permission denied");
        setUserLocation({ latitude: 25.1411, longitude: 55.1855 });
        setIsLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      const { latitude, longitude } = location.coords;
      setUserLocation({ latitude, longitude });
      setIsLoading(false);
    } catch (error) {
      console.error("Location error:", error);
      setError("Failed to get location");
      setUserLocation({ latitude: 25.1411, longitude: 55.1855 });
      setIsLoading(false);
    }
  };

  return { userLocation, isLoading, error, refetch: requestLocationPermission };
};
