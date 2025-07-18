import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    FlatList,
    Alert,
} from 'react-native';
import { Card, Button } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/navigation';
import { MenuItem } from '@/types/Restaurant';
import { MOCK_MENU_ITEMS } from '@/utils/mockData';


type MenuScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Menu'>;

const MenuScreen = () => {
    const navigation = useNavigation<MenuScreenNavigationProp>();
    const route = useRoute();
    const { restaurantId } = route.params as { restaurantId: string };

    const menuItems = MOCK_MENU_ITEMS[restaurantId] || [];

    // Group menu items by category
    const menuByCategory = menuItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, MenuItem[]>);

    const handleAddToCart = (item: MenuItem) => {
        // Implement add to cart functionality
        Alert.alert('Added to cart', `${item.name} has been added to your cart`);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialCommunityIcons name="arrow-left" size={wp(6)} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>Menu</Text>
                <View style={styles.headerRight} />
            </View>

            <ScrollView style={styles.content}>
                {Object.entries(menuByCategory).map(([category, items]) => (
                    <View key={category} style={styles.categorySection}>
                        <Text style={styles.categoryTitle}>{category}</Text>

                        {items.map((item) => (
                            <Card key={item.id} style={styles.menuItemCard}>
                                <View style={styles.menuItemContent}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={styles.menuItemImage}
                                        resizeMode="cover"
                                    />

                                    <View style={styles.menuItemDetails}>
                                        <Text style={styles.menuItemName}>{item.name}</Text>
                                        <Text style={styles.menuItemDescription}>{item.description}</Text>

                                        <View style={styles.menuItemTags}>
                                            {item.isVegetarian && (
                                                <View style={[styles.tag, styles.vegetarianTag]}>
                                                    <Text style={styles.tagText}>Vegetarian</Text>
                                                </View>
                                            )}
                                            {item.isSpicy && (
                                                <View style={[styles.tag, styles.spicyTag]}>
                                                    <Text style={styles.tagText}>Spicy</Text>
                                                </View>
                                            )}
                                        </View>

                                        <View style={styles.menuItemFooter}>
                                            <Text style={styles.menuItemPrice}>AED {item.price.toFixed(2)}</Text>
                                            <Button
                                                mode="contained"
                                                style={styles.addButton}
                                                labelStyle={styles.addButtonLabel}
                                                onPress={() => handleAddToCart(item)}
                                            >
                                                Add
                                            </Button>
                                        </View>
                                    </View>
                                </View>
                            </Card>
                        ))}
                    </View>
                ))}
            </ScrollView>

            {/* Fixed Order Button */}
            <View style={styles.orderButtonContainer}>
                <Button
                    mode="contained"
                    style={styles.orderButton}
                    labelStyle={styles.orderButtonLabel}
                    icon={() => (
                        <MaterialCommunityIcons name="cart" size={wp(5)} color="#fff" />
                    )}
                    onPress={() => { }}
                >
                    View Order (0)
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(4),
        paddingVertical: hp(2),
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    backButton: {
        padding: wp(2),
    },
    title: {
        fontSize: wp(5),
        fontWeight: 'bold',
        color: '#000',
    },
    headerRight: {
        width: wp(12),
    },
    content: {
        flex: 1,
        paddingBottom: hp(10), // Space for fixed order button
    },
    categorySection: {
        marginBottom: hp(3),
        paddingHorizontal: wp(4),
    },
    categoryTitle: {
        fontSize: wp(4.5),
        fontWeight: '600',
        color: '#8B5CF6',
        marginBottom: hp(2),
        paddingLeft: wp(2),
        borderLeftWidth: 3,
        borderLeftColor: '#8B5CF6',
    },
    menuItemCard: {
        marginBottom: hp(2),
        borderRadius: wp(2),
        elevation: 2,
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    menuItemContent: {
        flexDirection: 'row',
    },
    menuItemImage: {
        width: wp(30),
        height: wp(30),
    },
    menuItemDetails: {
        flex: 1,
        padding: wp(3),
    },
    menuItemName: {
        fontSize: wp(4),
        fontWeight: '600',
        color: '#000',
        marginBottom: hp(0.5),
    },
    menuItemDescription: {
        fontSize: wp(3.5),
        color: '#666',
        marginBottom: hp(1),
    },
    menuItemTags: {
        flexDirection: 'row',
        marginBottom: hp(1.5),
    },
    tag: {
        paddingHorizontal: wp(2.5),
        paddingVertical: hp(0.5),
        borderRadius: wp(1),
        marginRight: wp(2),
    },
    vegetarianTag: {
        backgroundColor: '#4CAF50',
    },
    spicyTag: {
        backgroundColor: '#F44336',
    },
    tagText: {
        fontSize: wp(3),
        color: '#fff',
        fontWeight: '500',
    },
    menuItemFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 'auto',
    },
    menuItemPrice: {
        fontSize: wp(4),
        fontWeight: 'bold',
        color: '#8B5CF6',
    },
    addButton: {
        borderRadius: wp(2),
        backgroundColor: '#8B5CF6',
        paddingHorizontal: wp(3),
    },
    addButtonLabel: {
        color: '#fff',
        fontSize: wp(3.5),
    },
    orderButtonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: wp(4),
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    orderButton: {
        borderRadius: wp(2),
        backgroundColor: '#8B5CF6',
        paddingVertical: hp(1.5),
    },
    orderButtonLabel: {
        color: '#fff',
        fontSize: wp(4),
        fontWeight: 'bold',
    },
});

export default MenuScreen;