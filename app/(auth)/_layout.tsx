import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Slot />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e7e7e7",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
