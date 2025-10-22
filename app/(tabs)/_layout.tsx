import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#55EEE3",
        tabBarInactiveTintColor: "#e989ee",
        headerRight: () => <Link href="/">Home</Link>,
        headerStyle: {
          backgroundColor: "#71015b",
          paddingVertical: 24,
          paddingRight: 40,
          marginTop: 82
        },
      }}
    >
      <Tabs.Screen
        name="tab-one"
        options={{
          title: "Tab One",
          tabBarIcon: () => <FontAwesome name="address-book" />,
        }}
      />
      <Tabs.Screen
        name="tab-two"
        options={{
          title: "Tab Two",
          tabBarIcon: () => <FontAwesome name="adjust" />,
        }}
      />
    </Tabs>
  );
}
