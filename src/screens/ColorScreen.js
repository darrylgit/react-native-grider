import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

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
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{ height: 100, width: 100, backgroundColor: item }}
            ></View>
          );
        }}
      />
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
