import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate('Components')}
          title='Go to Components Demo'
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate('List')}
          title='Go to List Demo'
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate('Image')}
          title='Go to Image Demo'
        />
      </View>
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
