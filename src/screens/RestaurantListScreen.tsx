import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  RefreshControl,
} from 'react-native';
import { Searchbar, ActivityIndicator } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/navigation';
import { useLocation } from '../hooks/useLocation';
import RestaurantCard from '@/components/cards/RestaurantCard';
import MapViewComponent from '@/components/MapView';
import { Restaurant } from '@/types/Restaurant';
import { CATEGORIES, MOCK_RESTAURANTS } from '@/utils/mockData';


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'RestaurantList'>;

const CategoryFilter: React.FC<{
  categories: typeof CATEGORIES;
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}> = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
      <TouchableOpacity style={styles.filterButton}>
        <MaterialCommunityIcons name="tune" size={wp(5)} color="#666" />
      </TouchableOpacity>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.key}
          style={[
            styles.categoryButton,
            selectedCategory === category.key && styles.selectedCategoryButton,
          ]}
          onPress={() => onCategorySelect(category.key)}
        >
          <MaterialCommunityIcons
            name={category.icon as any}
            size={wp(5)}
            color={selectedCategory === category.key ? '#fff' : '#666'}
          />
          <Text
            style={[
              styles.categoryText,
              selectedCategory === category.key && styles.selectedCategoryText,
            ]}
          >
            {category.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const RestaurantListScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { userLocation, isLoading: locationLoading, error: locationError, refetch } = useLocation();

  const [restaurants] = useState<Restaurant[]>(MOCK_RESTAURANTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('cuisines');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setTimeout(() => setRefreshing(false), 2000);
  }, [refetch]);

  const handleMenuPress = (restaurantId: string) => {
    navigation.navigate('Menu', { restaurantId });
  };

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedRestaurants = filteredRestaurants.sort((a, b) => {
    if (selectedCategory === 'cuisines') return a.distance - b.distance;
    return b.rating - a.rating;
  });

  if (locationLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#8B5CF6" />
        <Text style={styles.loadingText}>Finding nearby restaurants...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={wp(6)} color="#000" />
        </TouchableOpacity>
        <View style={styles.locationInfo}>
          <MaterialCommunityIcons name="map-marker" size={wp(5)} color="#8B5CF6" />
          <View style={styles.locationText}>
            <Text style={styles.locationTitle}>Offers Near</Text>
            <Text style={styles.locationSubtitle}>
              {locationError ? 'Default Location - Dubai' : 'Jumeirah St - Umm - 74147 - Dubai'}
            </Text>
          </View>
          <MaterialCommunityIcons name="chevron-down" size={wp(5)} color="#666" />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search for restaurants or cuisine..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
          inputStyle={styles.searchInput}
          iconColor="#666"
        />
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Category Filter */}
        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        {/* Map View */}
        <MapViewComponent
          restaurants={sortedRestaurants}
          userLocation={userLocation}
        />

        {/* Restaurant List */}
        <View style={styles.restaurantList}>
          {sortedRestaurants.length > 0 ? (
            sortedRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onMenuPress={handleMenuPress}
              />
            ))
          ) : (
            <View style={styles.noResultsContainer}>
              <Text style={styles.noResultsText}>No restaurants found</Text>
              <Text style={styles.noResultsSubText}>Try adjusting your search or filters</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    marginTop: hp(2),
    fontSize: wp(4),
    color: '#666',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
    paddingBottom: hp(1),
  },
  backButton: {
    marginRight: wp(3),
  },
  locationInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    flex: 1,
    marginLeft: wp(2),
  },
  locationTitle: {
    fontSize: wp(4),
    fontWeight: '600',
    color: '#000',
  },
  locationSubtitle: {
    fontSize: wp(3.5),
    color: '#666',
    marginTop: hp(0.2),
  },
  searchContainer: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  searchBar: {
    backgroundColor: '#f5f5f5',
    borderRadius: wp(3),
    elevation: 0,
  },
  searchInput: {
    fontSize: wp(3.5),
  },
  content: {
    flex: 1,
  },
  categoryContainer: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  filterButton: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(3),
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: wp(6),
    backgroundColor: '#f5f5f5',
    marginRight: wp(3),
  },
  selectedCategoryButton: {
    backgroundColor: '#8B5CF6',
  },
  categoryText: {
    fontSize: wp(3.5),
    color: '#666',
    marginLeft: wp(2),
  },
  selectedCategoryText: {
    color: '#fff',
  },
  restaurantList: {
    paddingHorizontal: wp(4),
    paddingBottom: hp(2),
  },
  noResultsContainer: {
    alignItems: 'center',
    paddingVertical: hp(4),
  },
  noResultsText: {
    fontSize: wp(4.5),
    fontWeight: '600',
    color: '#666',
  },
  noResultsSubText: {
    fontSize: wp(3.5),
    color: '#999',
    marginTop: hp(1),
  },
});

export default RestaurantListScreen;