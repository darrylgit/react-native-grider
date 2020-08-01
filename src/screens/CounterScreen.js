import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import CustomButtom from '../components/CustomButton';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <CustomButtom
        title='Increase'
        callback={() => {
          setCounter(counter + 1);
        }}
      />
      <CustomButtom
        title='Decrease'
        callback={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
