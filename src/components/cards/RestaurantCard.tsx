import { Restaurant } from '@/types/Restaurant';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface RestaurantCardProps {
    restaurant: Restaurant;
    onMenuPress: (restaurantId: string) => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onMenuPress }) => {
    const handleDirections = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${restaurant.location.latitude},${restaurant.location.longitude}`;
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };

    return (
        <Card style={styles.restaurantCard}>
            <View style={styles.cardContent}>
                <Image source={{ uri: restaurant.image }} style={styles.restaurantImage} />

                {restaurant.discount && (
                    <View style={styles.discountBadge}>
                        <Text style={styles.discountText}>{restaurant.discount}</Text>
                    </View>
                )}

                <View style={styles.restaurantInfo}>
                    <Text style={styles.restaurantTitle}>{restaurant.name}</Text>

                    <View style={styles.ratingRow}>
                        <MaterialCommunityIcons name="star" size={wp(4)} color="#FFD700" />
                        <Text style={styles.ratingValue}>{restaurant.rating}</Text>
                        <Text style={styles.separator}>•</Text>
                        <Text style={styles.cuisineText}>{restaurant.cuisine}</Text>
                        <Text style={styles.separator}>•</Text>
                        <Text style={styles.cuisineText}>{restaurant.priceRange}</Text>
                    </View>

                    <Text style={styles.addressText}>{restaurant.address}</Text>

                    <View style={styles.deliveryInfo}>
                        <MaterialCommunityIcons name="clock-outline" size={wp(4)} color="#666" />
                        <Text style={styles.deliveryTime}>{restaurant.deliveryTime}</Text>
                        <Text style={styles.separator}>•</Text>
                        <Text style={styles.distance}>{restaurant.distance}km away</Text>
                    </View>

                    <View style={styles.actionButtons}>
                        <Button
                            mode="outlined"
                            style={styles.directionButton}
                            labelStyle={styles.directionButtonText}
                            icon={() => <MaterialCommunityIcons name="directions" size={wp(4)} color="#8B5CF6" />}
                            onPress={handleDirections}
                        >
                            Direction
                        </Button>
                        <Button
                            mode="contained"
                            style={styles.menuButton}
                            labelStyle={styles.menuButtonText}
                            icon={() => <MaterialCommunityIcons name="menu" size={wp(4)} color="#fff" />}
                            onPress={() => onMenuPress(restaurant.id)}
                        >
                            Menu
                        </Button>
                    </View>
                </View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    restaurantCard: {
        marginBottom: hp(2),
        borderRadius: wp(3),
        elevation: 2,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardContent: {
        overflow: 'hidden',
    },
    restaurantImage: {
        width: '100%',
        height: hp(20),
        resizeMode: 'cover',
    },
    discountBadge: {
        position: 'absolute',
        top: hp(15),
        right: wp(4),
        backgroundColor: '#8B5CF6',
        paddingHorizontal: wp(3),
        paddingVertical: hp(0.5),
        borderRadius: wp(1.5),
    },
    discountText: {
        color: '#fff',
        fontSize: wp(3),
        fontWeight: '600',
    },
    restaurantInfo: {
        padding: wp(4),
    },
    restaurantTitle: {
        fontSize: wp(5),
        fontWeight: '700',
        color: '#000',
        marginBottom: hp(0.5),
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(0.5),
    },
    ratingValue: {
        fontSize: wp(3.5),
        fontWeight: '600',
        color: '#000',
        marginLeft: wp(1),
    },
    separator: {
        fontSize: wp(3.5),
        color: '#666',
        marginHorizontal: wp(2),
    },
    cuisineText: {
        fontSize: wp(3.5),
        color: '#666',
    },
    addressText: {
        fontSize: wp(3.5),
        color: '#666',
        marginBottom: hp(1),
    },
    deliveryInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(1.5),
    },
    deliveryTime: {
        fontSize: wp(3.5),
        color: '#666',
        marginLeft: wp(1),
    },
    distance: {
        fontSize: wp(3.5),
        color: '#666',
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: wp(2),
    },
    directionButton: {
        flex: 1,
        borderColor: '#8B5CF6',
        borderWidth: 1,
    },
    directionButtonText: {
        color: '#8B5CF6',
        fontSize: wp(3.5),
    },
    menuButton: {
        flex: 1,
        backgroundColor: '#8B5CF6',
    },
    menuButtonText: {
        color: '#fff',
        fontSize: wp(3.5),
    },
});

export default RestaurantCard;
