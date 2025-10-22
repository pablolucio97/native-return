import { Stack } from "expo-router";
import { Image } from "react-native";

function ImageLogo() {
  return (
    <Image
      source={require("../../assets/images/favicon.png")}
      style={{ width: 30, height: 30, marginRight: 12 }}
    />
  );
}

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerTitleStyle: { fontWeight: "bold" },
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "About",
          headerTitleStyle: { fontWeight: "bold" },
          headerStyle: { backgroundColor: "#1e54f4" },
          headerTintColor: "#fff",
          headerRight: () => <ImageLogo />,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{ title: "Modal screen", presentation: "modal" }}
      />
    </Stack>
  );
}
