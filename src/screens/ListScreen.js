import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

  const friends = [
    { name: "friend #1", age: 20 },
    { name: "friend #2", age: 45 },
    { name: "friend #3", age: 32 },
    { name: "friend #4", age: 27 },
    { name: "friend #5", age: 53 },
    { name: "friend #6", age: 300 },
    { name: "friend #7", age: 30 },
    { name: "friend #8", age: 311 },
    { name: "friend #9", age: 100 }
  ];

  return ( 
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return ( 
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        )  
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
