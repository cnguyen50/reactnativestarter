import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";


const reducer = (state, action) => {
  switch (action.type) {
    case 'change_count':
      return { ...state, counter: state.counter + action.payload }
    default:
      return state;
  }
}

const CounterScreen = () => {

  const [state, runCounterReducer] = useReducer(reducer, { counter: 0 })
  const { counter } = state


  return (
    <View>
      <Button 
        title="Increase"
        onPress={() => {
          runCounterReducer({ type: 'change_count', payload: 1 });
        }}
      />
      <Button 
        title="Decrease"
        onPress={() => {
          runCounterReducer({ type: 'change_count', payload: -1 * 1 });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});

export default CounterScreen;
