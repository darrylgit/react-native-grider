import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CustomButtom = ({ title, route, navigation = false }) => {
  const navigate = navigation ? navigation.navigate : () => {};

  return (
    <View style={styles.button}>
      <Button onPress={() => navigate(route)} title={title} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 10
  }
});

export default CustomButtom;
