import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import CustomButton from '../components/CustomButton';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <CustomButton
        title='Add a Color'
        callback={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <View
        style={{ height: 100, width: 100, backgroundColor: randomRgb() }}
      ></View>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
