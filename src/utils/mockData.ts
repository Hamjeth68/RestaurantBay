import { Restaurant, Location, MenuItem } from "@/types/Restaurant";
import { experimental_LayoutConformance } from "react-native";

export const DEFAULT_LOCATION: Location = {
  latitude: 25.2048, // Dubai coordinates
  longitude: 55.2708,
};

export const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: "1",
    name: "Al Muntaha",
    rating: 4.5,
    cuisine: "Arabic",
    distance: 0.5,
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop",
    address: "Ground floor, Burj Al Arab Jumeirah, Jumeira",
    priceRange: "$$$",
    deliveryTime: "25-30 min",
    location: { latitude: 25.1411, longitude: 55.1855 },
  },
  {
    id: "2",
    name: "Cake World",
    rating: 4.8,
    cuisine: "Bakery",
    distance: 0.3,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    address: "Jumeirah Beach Road, Dubai",
    priceRange: "$$",
    deliveryTime: "15-20 min",
    location: { latitude: 25.142, longitude: 55.186 },
  },
  {
    id: "3",
    name: "Al Iwan",
    rating: 4.4,
    cuisine: "Arabic",
    distance: 0.7,
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    address: "Burj Al Arab, Dubai",
    priceRange: "$$$$",
    deliveryTime: "30-35 min",
    location: { latitude: 25.1405, longitude: 55.185 },
  },
  {
    id: "4",
    name: "Sahn Eddar",
    rating: 4.7,
    cuisine: "International",
    distance: 0.8,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    address: "Burj Al Arab, Dubai",
    priceRange: "$$$$",
    deliveryTime: "35-40 min",
    location: { latitude: 25.14, longitude: 55.1845 },
  },
  {
    id: "5",
    name: "Fix Chocolate",
    rating: 4.5,
    cuisine: "Desserts",
    distance: 0.6,
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
    address: "Jumeirah Street, Dubai",
    priceRange: "$$",
    deliveryTime: "20-25 min",
    location: { latitude: 25.1415, longitude: 55.1865 },
  },
  {
    id: "6",
    name: "Bab Al Yam",
    rating: 4.5,
    cuisine: "Arabic",
    distance: 0.4,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    address: "Ground floor, Burj Al Arab Jumeirah, Jumeira",
    discount: "Discount upto 30%",
    priceRange: "$$$",
    deliveryTime: "25-30 min",
    location: { latitude: 25.1412, longitude: 55.1858 },
  },
];

export const MOCK_MENU_ITEMS: { [restaurantId: string]: MenuItem[] } = {
  "1": [
    {
      id: "1",
      name: "Hummus with Pita",
      description:
        "Traditional Middle Eastern hummus served with warm pita bread",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=300&fit=crop",
      category: "Appetizers",
      isVegetarian: true,
    },
    {
      id: "2",
      name: "Grilled Lamb Kebab",
      description:
        "Tender lamb marinated in Arabic spices and grilled to perfection",
      price: 85,
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
      category: "Main Course",
      isSpicy: true,
    },
    {
      id: "3",
      name: "Baklava",
      description:
        "Traditional sweet pastry with layers of phyllo, nuts, and honey",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      category: "Desserts",
      isVegetarian: true,
    },
  ],
  "2": [
    {
      id: "4",
      name: "Chocolate Cake",
      description: "Rich, moist chocolate cake with chocolate ganache",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
      category: "Cakes",
      isVegetarian: true,
    },
    {
      id: "5",
      name: "Red Velvet Cupcakes",
      description: "Classic red velvet cupcakes with cream cheese frosting",
      price: 15,
      image:
        "https://images.unsplash.com/photo-1519869325930-281384150729?w=400&h=300&fit=crop",
      category: "Cupcakes",
      isVegetarian: true,
    },
  ],
};

export const CATEGORIES = [
  { key: "cuisines", label: "Cuisines", icon: "restaurant" },
  { key: "caffe", label: "Caffe", icon: "local-cafe" },
  { key: "restaurants", label: "Restaurants", icon: "restaurant-menu" },
  { key: "drinks", label: "Drinks", icon: "local-bar" },
];
