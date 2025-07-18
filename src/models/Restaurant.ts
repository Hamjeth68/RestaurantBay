// Restaurant.ts
export interface Restaurant {
  id: string;
  name: string;
  address: string;
  cuisine: string;
  rating: number;
  distance: number;
  discount?: number;
  description?: string;
}

// Cuisine.ts
export interface Cuisine {
  id: string;
  name: string;
}
