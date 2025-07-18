import { useState, useEffect } from "react";
import { RestaurantService } from "@/services/RestaurantService";
import { Restaurant, Location } from "@/types/Restaurant";

export const useRestaurants = (location: Location) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadRestaurants();
  }, [location]);

  const loadRestaurants = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const nearbyRestaurants = await RestaurantService.getNearbyRestaurants(
        location
      );
      setRestaurants(nearbyRestaurants);
    } catch (err) {
      console.error("Failed to load restaurants:", err);
      setError("Failed to load restaurants");
    } finally {
      setIsLoading(false);
    }
  };

  const searchRestaurants = async (query: string) => {
    try {
      setIsLoading(true);
      const results = await RestaurantService.searchRestaurants(
        query,
        location
      );
      setRestaurants(results);
    } catch (err) {
      console.error("Search failed:", err);
      setError("Search failed");
    } finally {
      setIsLoading(false);
    }
  };

  const filterByCategory = async (category: string) => {
    try {
      setIsLoading(true);
      const results = await RestaurantService.getRestaurantsByCategory(
        category,
        location
      );
      setRestaurants(results);
    } catch (err) {
      console.error("Filter failed:", err);
      setError("Filter failed");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    restaurants,
    isLoading,
    error,
    searchRestaurants,
    filterByCategory,
    refreshRestaurants: loadRestaurants,
  };
};
