import { COLORS, SPACING } from '@/utils/constants';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ErrorMessageProps {
    message: string;
    onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
    message,
    onRetry,
}) => {
    return (
        <View style={styles.container}>
            <Icon name="error-outline" size={40} color={COLORS.error} />
            <Text style={styles.message}>{message}</Text>
            {onRetry && (
                <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
                    <Text style={styles.retryText}>Try Again</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: SPACING.md,
    },
    message: {
        marginTop: SPACING.md,
        fontSize: 16,
        color: COLORS.text,
        textAlign: 'center',
    },
    retryButton: {
        marginTop: SPACING.md,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.sm,
        backgroundColor: COLORS.primary,
        borderRadius: 4,
    },
    retryText: {
        color: COLORS.background,
        fontSize: 16,
    },
});