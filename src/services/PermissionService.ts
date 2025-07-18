import * as Location from "expo-location";

class PermissionService {
  static async requestLocationPermission(): Promise<boolean> {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      return status === "granted";
    } catch (error) {
      console.error("Permission error:", error);
      return false;
    }
  }

  static async checkLocationPermission(): Promise<boolean> {
    try {
      const { status } = await Location.getForegroundPermissionsAsync();
      return status === "granted";
    } catch (error) {
      console.error("Permission check error:", error);
      return false;
    }
  }
}

export { PermissionService };
