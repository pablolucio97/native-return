import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CatchAllProductDetails() {
  const { rest } = useLocalSearchParams<{ rest: string[] }>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product Detail from path {rest.join("/")}</Text>
      <Link href="/products">Go to Products</Link>
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
    color: "#062e94",
  },
});
