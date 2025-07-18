import { colors } from '@/theme/colors/colors';
import { typography } from '@/theme/styles/typography';
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface FilterTabOption {
    key: string;
    label: string;
    icon: string;
}

interface FilterTabsProps {
    options: FilterTabOption[];
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({
    options,
    activeFilter,
    onFilterChange,
}) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            {options.map((option) => (
                <TouchableOpacity
                    key={option.key}
                    style={[
                        styles.tab,
                        activeFilter === option.key && styles.activeTab,
                    ]}
                    onPress={() => onFilterChange(option.key)}
                >
                    <Icon
                        name={option.icon}
                        size={20}
                        color={activeFilter === option.key ? colors.primary : colors.text.secondary}
                        style={styles.icon}
                    />
                    <Text
                        style={[
                            styles.tabText,
                            activeFilter === option.key && styles.activeTabText,
                        ]}
                    >
                        {option.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: colors.background,
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 8,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
    },
    activeTab: {
        backgroundColor: colors.primary + '20',
        borderColor: colors.primary,
    },
    tabText: {
        ...typography.caption,
        color: colors.text.secondary,
        marginLeft: 4,
        fontWeight: '600',
    },
    activeTabText: {
        color: colors.primary,
    },
    icon: {
        marginRight: 4,
    },
});