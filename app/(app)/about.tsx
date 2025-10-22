import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About</Text>
      <Link href="/profile">Go to Profile</Link>
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
    color: "#71015b",
  },
});
