import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CustomButton from "./CustomButton";

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <CustomButton title={`Increase ${color}`} />
      <CustomButton title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
