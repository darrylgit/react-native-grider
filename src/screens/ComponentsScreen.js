import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Daniel';
  return (
    <View>
      <Text style={styles.headingStyle}>Getting started with React Native</Text>
      <Text style={styles.greetingStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 45
  },
  greetingStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
