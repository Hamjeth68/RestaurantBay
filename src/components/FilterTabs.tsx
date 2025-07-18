import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS, SPACING, BORDER_RADIUS } from '../utils/constants';

interface FilterTab {
    id: string;
    name: string;
    icon: string;
}

interface FilterTabsProps {
    tabs: FilterTab[];
    activeTab: string;
    onTabPress: (tabId: string) => void;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({
    tabs,
    activeTab,
    onTabPress,
}) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.id}
                    style={[
                        styles.tab,
                        activeTab === tab.id && styles.activeTab,
                    ]}
                    onPress={() => onTabPress(tab.id)}
                >
                    <Icon
                        name={tab.icon}
                        size={20}
                        color={activeTab === tab.id ? COLORS.primary : COLORS.textSecondary}
                    />
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === tab.id && styles.activeTabText,
                        ]}
                    >
                        {tab.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: SPACING.md,
    },
    contentContainer: {
        paddingHorizontal: SPACING.md,
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        marginRight: SPACING.sm,
        borderRadius: BORDER_RADIUS.lg,
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    activeTab: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },
    tabText: {
        marginLeft: SPACING.xs,
        fontSize: 14,
        color: COLORS.textSecondary,
        fontWeight: '500',
    },
    activeTabText: {
        color: COLORS.background,
    },
});