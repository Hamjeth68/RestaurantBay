export interface Location {
  latitude: number;
  longitude: number;
}

export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  cuisine: string;
  distance: number;
  image: string;
  address: string;
  discount?: string;
  priceRange: string;
  deliveryTime: string;
  location: Location;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}
