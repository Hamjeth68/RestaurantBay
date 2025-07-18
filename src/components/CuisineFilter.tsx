import { Cuisine } from '@/models/Restaurant';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Chip, Text, useTheme } from 'react-native-paper';

interface CuisineFilterProps {
    cuisines: Cuisine[];
    selected: string;
    onSelect: (cuisine: string) => void;
}

const CuisineFilter = ({ cuisines, selected, onSelect }: CuisineFilterProps) => {
    const theme = useTheme();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cuisines</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.chipsContainer}
            >
                <Chip
                    selected={selected === 'All'}
                    onPress={() => onSelect('All')}
                    style={styles.chip}
                    selectedColor={theme.colors.primary}
                >
                    All
                </Chip>
                {cuisines.map(cuisine => (
                    <Chip
                        key={cuisine.id}
                        selected={selected === cuisine.name}
                        onPress={() => onSelect(cuisine.name)}
                        style={styles.chip}
                        selectedColor={theme.colors.primary}
                    >
                        {cuisine.name}
                    </Chip>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 8,
        fontSize: 16,
    },
    chipsContainer: {
        paddingRight: 16,
    },
    chip: {
        marginRight: 8,
    },
});

export default CuisineFilter;