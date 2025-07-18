import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MapView, { Marker } from 'react-native-maps';
import { Restaurant } from '@/types/Restaurant';

interface MapViewComponentProps {
    restaurants: Restaurant[];
    userLocation?: { latitude: number; longitude: number } | null;
}

const MapViewComponent: React.FC<MapViewComponentProps> = ({ restaurants, userLocation }) => {
    const initialRegion = {
        latitude: userLocation?.latitude || 25.1411,
        longitude: userLocation?.longitude || 55.1855,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
    };

    return (
        <View style={styles.mapContainer}>
            <MapView
                style={styles.map}
                initialRegion={initialRegion}
                showsUserLocation={true}
                showsMyLocationButton={true}
                loadingEnabled={true}
            >
                {restaurants.map((restaurant) => (
                    <Marker
                        key={restaurant.id}
                        coordinate={restaurant.location}
                        title={restaurant.name}
                        description={`${restaurant.rating} ⭐ • ${restaurant.cuisine}`}
                    >
                        <View style={styles.mapMarker}>
                            <View style={styles.ratingBadge}>
                                <Text style={styles.ratingText}>{restaurant.rating}</Text>
                            </View>
                            <Text style={styles.restaurantName}>{restaurant.name}</Text>
                        </View>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        height: hp(25),
        marginHorizontal: wp(4),
        marginVertical: hp(2),
        borderRadius: wp(3),
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    mapMarker: {
        alignItems: 'center',
    },
    ratingBadge: {
        backgroundColor: '#8B5CF6',
        paddingHorizontal: wp(2),
        paddingVertical: hp(0.5),
        borderRadius: wp(2),
        marginBottom: hp(0.5),
    },
    ratingText: {
        color: '#fff',
        fontSize: wp(3),
        fontWeight: '600',
    },
    restaurantName: {
        fontSize: wp(2.5),
        fontWeight: '500',
        color: '#000',
        textAlign: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: wp(1),
        paddingVertical: hp(0.2),
        borderRadius: wp(1),
        maxWidth: wp(20),
    },
});

export default MapViewComponent;
