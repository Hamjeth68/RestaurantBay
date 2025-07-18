import React from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS, SPACING, BORDER_RADIUS } from '../utils/constants';

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    onClear?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChangeText,
    placeholder = 'Search for Location You Want to Get Offer',
    onClear,
}) => {
    return (
        <View style={styles.container}>
            <Icon name="search" size={20} color={COLORS.textSecondary} style={styles.searchIcon} />
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={COLORS.textSecondary}
            />
            {value.length > 0 && (
                <TouchableOpacity onPress={onClear} style={styles.clearButton}>
                    <Icon name="clear" size={20} color={COLORS.textSecondary} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.lg,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        marginHorizontal: SPACING.md,
        marginBottom: SPACING.md,
    },
    searchIcon: {
        marginRight: SPACING.sm,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: COLORS.text,
    },
    clearButton: {
        padding: SPACING.xs,
    },
});