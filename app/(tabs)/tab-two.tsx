import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TabTwo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TabTwo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#71015b",
  },
});
