import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

import CustomButtom from "../components/CustomButton";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <CustomButtom
        title='Go to Components Demo'
        callback={() => navigation.navigate("Components")}
      />
      <CustomButtom
        title='Go to List Demo'
        callback={() => navigation.navigate("List")}
      />
      <CustomButtom
        title='Go to Image Demo'
        callback={() => navigation.navigate("Image")}
      />
      <CustomButtom
        title='Go to Counter Demo'
        callback={() => navigation.navigate("Counter")}
      />
      <CustomButtom
        title='Go to Color Demo'
        callback={() => navigation.navigate("Color")}
      />
      <CustomButtom
        title='Go to Square Demo'
        callback={() => navigation.navigate("Square")}
      />
      <CustomButtom
        title='Go to Text Demo'
        callback={() => navigation.navigate("Text")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    marginBottom: 10
  }
});

export default HomeScreen;
