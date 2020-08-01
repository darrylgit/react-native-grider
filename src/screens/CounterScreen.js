import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import CustomButtom from '../components/CustomButton';

const CounterScreen = () => {
  let [counter, updateCounter] = useState(0);

  return (
    <View>
      <CustomButtom
        title='Increase'
        callback={() => {
          updateCounter(counter + 1);
        }}
      />
      <CustomButtom
        title='Decrease'
        callback={() => {
          updateCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
