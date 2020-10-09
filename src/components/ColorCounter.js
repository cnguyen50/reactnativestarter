import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({color}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`More ${color}`}
      />
      <Button
        title={`Less ${color}`}
      />
    </View>
  )
}

export default ColorCounter;