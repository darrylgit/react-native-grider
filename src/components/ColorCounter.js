import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CustomButton from "./CustomButton";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <CustomButton callback={() => onIncrease()} title={`Increase ${color}`} />
      <CustomButton callback={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
