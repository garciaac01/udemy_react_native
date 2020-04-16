import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <View style={styles.boxOne} />
        <View style={styles.boxTwo} />
        <View style={styles.boxThree} />
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
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        fontSize: 18,
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },
    boxOne: {
        height: 50,
        width: 50,
        backgroundColor: '#0000ff'
    },
    boxTwo: {
        height: 50,
        width: 50,
        backgroundColor: '#ff0000',
        alignSelf: 'flex-end',
        position: 'absolute'
    },
    boxThree: {
        height: 50,
        width: 50,
        backgroundColor: '#00ff00',
        alignSelf: 'center'
    }
});

// flex gets applied to a child element
// if only one element has flex, it will take up all the extra space
// if two have the flex, they will share the extra space
// if all have the same flex, they'll all share the space evenly
// works proportionally, for example:
// elOne: flex 4, elTwo: flex 4, ,elThree: flex 2
// elOne and elTwo will take up 40% of the extra spac each, while elThree will take up 20%

// alignSelf
// assigned on child element
// essentially overrides alignItems from the parent element
// flex-start, center, and flex-end, stretch

// position
// assigned on child
// relative by default -- basically means "do what you normally do"
// absolute is other option -- essentially ignores its sibling elements

// top bottom left right
// adds extra spacing between two child elements
// essentially renders the elements and then makes this shift without moving the other elements
// for example, if we have three <text> on stacked up, and we do top: 10 on the middle one,
// we'll move the middle element down 10 and it will be partially overlapping the third element.

//setting a child to position: absolute, and top/bottom/left/right to 0 will get
// a child to fill up the entire parent element.
// alternative is to do ...StyleSheet.absoluteFillObject


export default BoxScreen;