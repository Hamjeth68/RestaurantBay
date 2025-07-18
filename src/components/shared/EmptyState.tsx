import { colors } from '@/theme/colors/colors';
import { typography } from '@/theme/styles/typography';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface EmptyStateProps {
    message: string;
    icon?: string;
    image?: number;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
    message,
    icon = 'search-off',
    image
}) => {
    return (
        <View style={styles.container}>
            {image ? (
                <Image source={image} style={styles.image} />
            ) : (
                <Icon name={icon} size={64} color={colors.text.secondary} />
            )}
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        backgroundColor: colors.background,
    },
    message: {
        ...typography.h3,
        color: colors.text.secondary,
        textAlign: 'center',
        marginTop: 16,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 16,
    },
});