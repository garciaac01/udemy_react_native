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
// flex-start -- takes up the width of their own content from the start of the parent
// center
// flex-end -- takes up width of content at the right side of the parent

// flexDirection
// column by default--switching to row aligns the items horizontally

// justifyContent
// lays out children along the flexDirection axis (essentially aligns things the opposite that alignItems does)
// flex-start -- at the start of the parent container
// center
// space-around
// space-between
// flex-end

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        justifyContent: 'space-around'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
    }
});

export default BoxScreen;