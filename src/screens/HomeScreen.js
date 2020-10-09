import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Hello dank</Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button 
        title="Go to Image Screen Demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button 
        title="Go to Image Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />    
    </View> 
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});

export default HomeScreen;
