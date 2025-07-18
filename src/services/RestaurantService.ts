import { MOCK_RESTAURANTS } from "@/utils/mockData";
import { Restaurant, Location } from "../types/Restaurant";
import { calculateDistance } from "@/utils/distance";

export class RestaurantService {
  static async getNearbyRestaurants(
    userLocation: Location
  ): Promise<Restaurant[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return MOCK_RESTAURANTS.map((restaurant) => ({
      ...restaurant, // This spreads all properties from the mock restaurant
      distance: calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        restaurant.location.latitude,
        restaurant.location.longitude
      ),
    })).sort((a, b) => a.distance - b.distance);
  }

  static async searchRestaurants(
    query: string,
    userLocation: Location
  ): Promise<Restaurant[]> {
    const allRestaurants = await this.getNearbyRestaurants(userLocation);

    if (!query.trim()) {
      return allRestaurants;
    }

    return allRestaurants.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(query.toLowerCase()) ||
        restaurant.address.toLowerCase().includes(query.toLowerCase())
    );
  }

  static async getRestaurantsByCategory(
    category: string,
    userLocation: Location
  ): Promise<Restaurant[]> {
    const allRestaurants = await this.getNearbyRestaurants(userLocation);

    if (category === "Restaurants") {
      return allRestaurants;
    }

    return allRestaurants.filter((restaurant) =>
      restaurant.cuisine.toLowerCase().includes(category.toLowerCase())
    );
  }
}
