import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

interface HeaderProps {
    location: string;
}

const Header = ({ location }: HeaderProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.time}>9:41</Text>
            </View>
            <View style={styles.headerRow}>
                <Text style={styles.offersText}>Offers Near</Text>
            </View>
            <View style={styles.headerRow}>
                <Text style={styles.locationText}>{location}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingBottom: 8,
    },
    headerRow: {
        marginBottom: 4,
    },
    time: {
        fontSize: 14,
        color: '#666',
        textAlign: 'right',
    },
    offersText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    locationText: {
        fontSize: 14,
        color: '#666',
    },
});

export default Header;