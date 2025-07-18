# Restaurant Bay App -

## Features ✨

- 🗺️ **Interactive Map View** - See restaurants near your location
- 🔍 **Smart Search** - Find restaurants by name, cuisine, or location
- 📜 **Detailed Menus** - Browse full menus with dietary information
- 📍 **Get Directions** - One-tap navigation to any restaurant
- 🏷️ **Special Offers** - View current discounts and promotions
- ⏱️ **Delivery Estimates** - See preparation and delivery times

## Screenshots 📸

### Restaurant Discovery

| Home Screen                                            | Restaurant List                                                                                       | Filter View                                            |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| <img src="src/screenshots/1000013713.jpg" width="200"> | <img src="/Users/hamjethmisree/Desktop/dev/RestaurantBay/src/screenshots/1000013718.jpg" width="200"> | <img src="src/screenshots/1000013719.jpg" width="200"> |

### Restaurant Details

| Menu Screen                            | Special Offers                         | Order Summary |
| -------------------------------------- | -------------------------------------- | ------------- |
| <img src="1000013719.jpg" width="200"> | <img src="1000013718.jpg" width="200"> | Coming Soon   |

## Key Functionality 🛠️

```javascript
// Example of core functionality
function findRestaurants(location, cuisine) {
  return restaurants.filter(
    (restaurant) =>
      restaurant.location === location && restaurant.cuisine === cuisine
  );
}
```
