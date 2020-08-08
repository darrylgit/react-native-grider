import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={{ ...styles.boxStyle, ...styles.boxOneStyle }}></View>
      <View style={{ ...styles.boxStyle, ...styles.boxTwoStyle }}></View>
      <View style={{ ...styles.boxStyle, ...styles.boxThreeStyle }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  boxStyle: {
    height: 60,
    width: 90,
    borderWidth: 3
  },
  boxOneStyle: {
    backgroundColor: "#FF6C4C",
    borderColor: "#9F4430"
  },
  boxTwoStyle: {
    backgroundColor: "#65FF4C",
    borderColor: "#3F9F30",
    marginTop: 50
  },
  boxThreeStyle: {
    backgroundColor: "#4C7DFF",
    borderColor: "#304E9F"
  }
});

export default BoxScreen;
