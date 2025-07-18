import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Location } from '../../types/Location';
import { colors } from '@/theme/colors/colors';
import { typography } from '@/theme/styles/typography';

interface LocationHeaderProps {
    location: Location | null;
    loading: boolean;
    error: string | null;
    onRefresh: () => void;
}

export const LocationHeader: React.FC<LocationHeaderProps> = ({
    location,
    loading,
    error,
    onRefresh,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.locationContainer}>
                <Icon name="location-on" size={20} color={colors.primary} />
                <View style={styles.textContainer}>
                    {loading ? (
                        <Text style={styles.loadingText}>Detecting your location...</Text>
                    ) : error ? (
                        <Text style={styles.errorText}>Location access denied</Text>
                    ) : (
                        <Text style={styles.locationText} numberOfLines={1}>
                            {location ? `Near ${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}` : 'Location not available'}
                        </Text>
                    )}
                </View>
            </View>
            <TouchableOpacity onPress={onRefresh} disabled={loading}>
                <Icon
                    name="refresh"
                    size={24}
                    color={loading ? colors.text.disabled : colors.primary}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: colors.background,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
        marginLeft: 8,
    },
    locationText: {
        ...typography.body,
        color: colors.text.primary,
    },
    loadingText: {
        ...typography.body,
        color: colors.text.secondary,
    },
    errorText: {
        ...typography.body,
        color: colors.error,
    },
});