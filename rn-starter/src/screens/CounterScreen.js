import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0); // 0 gives counter an initial value of 0
    // array destructuring; counter should only be updated by using
    // our setCounter function

    return (
        <View>
            <Button title="Increase" onPress={() => {
                setCounter(counter + 1);
            }} />
            <Button title="Decrease" onPress={() => {
                setCounter(counter - 1);
            }} />
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;

