import { colors } from '@/theme/colors/colors';
import { typography } from '@/theme/styles/typography';
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface SearchBarProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onChangeText, value }) => {
    return (
        <View style={styles.container}>
            <Icon name="search" size={20} color={colors.text.secondary} style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={colors.text.secondary}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surface,
        borderRadius: 12,
        paddingHorizontal: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        height: 48,
    },
    icon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        ...typography.body,
        color: colors.text.primary,
    },
});