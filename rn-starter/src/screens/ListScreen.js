import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Gizmo', age: 9 },
        { name: 'Giacomo', age: 9 },
        { name: 'Harrison', age: 1 },
        { name: 'Caitlin', age: 32 },
        { name: 'Andy', age: 36 },
        { name: 'Bill', age: 42 },
        { name: 'Bob', age: 51 },
        { name: 'Suzie', age: 22 },
        { name: 'Wilbur', age: 10 },
    ];
    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                // item === { name: 'Gizmo' }
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

export default ListScreen;