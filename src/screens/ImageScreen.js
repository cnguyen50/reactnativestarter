import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" image="" />
      <ImageDetail title="Beach" image=""/>
      <ImageDetail title="Mountain" image=""/>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});

export default ImageScreen;