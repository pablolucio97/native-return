import { Link, router } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text> Home Screen</Text>
      <Link href="/profile">Go to Profile</Link>
      <Link href="/about">Go to About</Link>
      <Link href="/about">Go to About</Link>
      <Link href="/(tabs)/tab-one">Tabs</Link>
      <Link href="/modal">Modal</Link>
      <Link href="/(drawer)/dashboard">Dashboard</Link>
      <Link href="/platform-screens/help">Help specific platform</Link>
      <Link href="/products" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>See Products</Text>
        </Pressable>
      </Link>
      <Button title="Login" onPress={() => router.push("/login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: "#008CBA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 12
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
