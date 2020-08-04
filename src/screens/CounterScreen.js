import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import CustomButtom from "../components/CustomButton";

const INITIAL_STATE = { counter: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { counter: state.counter + 1 };
    case "DECREASE":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const { counter } = state;
  return (
    <View>
      <CustomButtom
        title='Increase'
        callback={() => {
          dispatch({ type: "INCREASE" });
        }}
      />
      <CustomButtom
        title='Decrease'
        callback={() => {
          dispatch({ type: "DECREASE" });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
