import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter"
import ColorScreen from "./ColorScreen";

const SquareScreen = () => {
  return (
    <View>
      <Text> Square Screen</Text>
      <ColorCounter
        color="Red"
      />
      <ColorCounter
        color="Green"
      />
      <ColorCounter
        color="Blue"
      />
    </View>
  )
};

const styles = StyleSheet.create({
});

export default SquareScreen;