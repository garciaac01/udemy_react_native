import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
        <Text style={styles.textStyle}>Child #3</Text>
    </View>
};

// for alignItems, the options are:
// stretch -- the default, takes up the whole width of the parent
// flex-start -- takes up the width of their own content
// center
// flex-end -- takes up width of content at the right side of the parent
const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'flex-end',
        borderWidth: 3,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
    }
});

export default BoxScreen;