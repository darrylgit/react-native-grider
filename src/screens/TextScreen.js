import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      <Text>My name is: {name}</Text>
      {name.toLowerCase() === "daniel" ? (
        <Text style={styles.warning}>
          Your name is not allowed to be Daniel. Get out of here!
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 10,
    borderColor: "black",
    borderWidth: 1
  },
  warning: {
    margin: 15,
    fontSize: 18,
    color: "red"
  }
});

export default TextScreen;
