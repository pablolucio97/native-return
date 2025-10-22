import { Link, Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductsLayout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
        <Link href="/">Home</Link>
      </View>
      <View style={styles.container}>
        <Slot />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: "100%",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4213dd87",
    padding: 20,
  },
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cdcdcd",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    width: "100%",
    backgroundColor: "#6d6903",
    padding: 20,
  },
});
