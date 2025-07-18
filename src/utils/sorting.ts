import { Restaurant } from "../models/Restaurant";

export const sortByDistance = (restaurants: Restaurant[]): Restaurant[] => {
  return [...restaurants].sort((a, b) => a.distance - b.distance);
};

export const sortByRating = (restaurants: Restaurant[]): Restaurant[] => {
  return [...restaurants].sort((a, b) => b.rating - a.rating);
};
