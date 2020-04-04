import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Gizmo' },
        { name: 'Giacomo' },
        { name: 'Harrison' },
        { name: 'Caitlin' },
        { name: 'Andy' },
        { name: 'Bill' },
        { name: 'Bob' },
        { name: 'Suzie' },
        { name: 'Wilbur' },
    ];
    return (
        <FlatList
            data={friends}
            renderItem={({ item }) => {
                // item === { name: 'Gizmo' }
                return <Text>{item.name}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default ListScreen;