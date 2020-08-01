import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  let [counter, updateCounter] = useState(0);

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          updateCounter(counter + 1);
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          updateCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
