import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
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
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 4
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 4
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 2
    }
});

// flex gets applied to a child element
// if only one element has flex, it will take up all the extra space
// if two have the flex, they will share the extra space
// if all have the same flex, they'll all share the space evenly
// works proportionally, for example:
// elOne: flex 4, elTwo: flex 4, ,elThree: flex 2
// elOne and elTwo will take up 40% of the extra spac each, while elThree will take up 20%

export default BoxScreen;