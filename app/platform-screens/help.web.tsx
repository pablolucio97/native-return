import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Help() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Web</Text>
      <Link href="/">Go to Home</Link>
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
    color: "#da4c24",
  },
});
