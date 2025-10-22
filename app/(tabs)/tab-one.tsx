import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TabOne() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TabOne</Text>
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
