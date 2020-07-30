import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend A', age: 12 },
    { name: 'Friend B', age: 13 },
    { name: 'Friend 4', age: 22 },
    { name: 'Friend 5', age: 2 },
    { name: 'Friend 6', age: 5 },
    { name: 'Friend 7', age: 23 },
    { name: 'Friend 8', age: 14 },
    { name: 'Friend 9', age: 76 },
    { name: 'Friend 10', age: 43 }
  ];
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
