# Restaurant Bay App

## Getting Started

To get started with the Restaurant Bay App, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/restaurant-bay-app.git
```

2. Navigate to the project directory:

```bash
cd restaurant-bay-app
```

3. Install the required dependencies:

```bash
yarn install
```

4. Run the development server:

```bash
yarn  start
```

## Android Setup

To set up the Android version of the app, follow these steps:

1. Open the `android` directory in Android Studio.
2. Click on `File > Sync Project with Gradle Files`.
3. Wait for the Gradle files to sync.
4. Run the app on an Android device or emulator.

## iOS Setup

To set up the iOS version of the app, follow these steps:

1. Open the `ios` directory in Xcode.
2. Click on `Build > Build`.

## Features ✨

- 🗺️ **Interactive Map View** - See restaurants near your location
- 🔍 **Smart Search** - Find restaurants by name, cuisine, or location
- 📜 **Detailed Menus** - Browse full menus with dietary information
- 📍 **Get Directions** - One-tap navigation to any restaurant
- 🏷️ **Special Offers** - View current discounts and promotions
- ⏱️ **Delivery Estimates** - See preparation and delivery times

## Screenshots 📸

### Restaurant Discovery

| Home Screen                                            | Restaurant List                                        | Filter View                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| <img src="src/screenshots/1000013713.jpg" width="200"> | <img src="src/screenshots/1000013718.jpg" width="200"> | <img src="src/screenshots/1000013719.jpg" width="200"> |

## Demo Video 🎥

https://drive.google.com/file/d/1sfkpnU6_4E0lAbeOhqlP05wbBcVRapt3/view?usp=share_link

# Restaurant Bay App - App Explanation

This React Native application helps users discover nearby restaurants, view their menus, and get directions. Here's a comprehensive breakdown of the app's architecture and functionality:

## Core Features

1. **Restaurant Discovery**:

   - Displays nearby restaurants with key details (rating, cuisine, distance)
   - Interactive map showing restaurant locations
   - Filtering by cuisine type and search functionality

2. **Menu Browsing**:

   - Detailed menu pages for each restaurant
   - Menu items categorized (Appetizers, Main Courses, etc.)
   - Dietary tags (vegetarian, spicy)

3. **Navigation**:
   - Get directions to any restaurant via Google Maps
   - Intuitive navigation between screens

## Technical Architecture

### 1. Navigation Structure

```
App (NavigationContainer)
├── RestaurantListScreen (Home)
└── MenuScreen
```

### 2. Key Components

**RestaurantListScreen**:

- Shows list of restaurants with:
  - Search bar
  - Category filters
  - Interactive map
  - Restaurant cards with key info
- Uses device location (with fallback to Dubai coordinates)

**MenuScreen**:

- Displays restaurant menu organized by categories
- Each menu item shows:
  - Image
  - Description
  - Price
  - Dietary tags
  - Add to cart button

### 3. Data Flow

1. **Initialization**:

   - App loads with RestaurantListScreen
   - Fetches user location (or uses default)
   - Displays nearby restaurants

2. **User Interactions**:

   - Search/filter updates restaurant list
   - Clicking "Menu" navigates to MenuScreen with restaurantId
   - Clicking "Direction" opens Google Maps with restaurant location

3. **State Management**:
   - Local state for search/filter values
   - Mock data for restaurants and menus
   - Location handling via custom hook

## Technical Highlights

1. **Type Safety**:

   - Comprehensive TypeScript interfaces
   - Strictly typed navigation parameters
   - Type-safe component props

2. **Responsive Design**:

   - Uses `react-native-responsive-screen`
   - Consistent spacing across devices
   - Adaptive layouts

3. **Performance**:

   - FlatList for efficient rendering
   - Memoized components
   - Optimized image loading

4. **UI/UX**:
   - Clean Material Design-inspired interface
   - Consistent color scheme
   - Intuitive navigation patterns
