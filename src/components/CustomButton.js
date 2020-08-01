import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CustomButtom = ({ title, callback }) => {
  return (
    <View style={styles.button}>
      <Button onPress={callback} title={title} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 10
  }
});

export default CustomButtom;
