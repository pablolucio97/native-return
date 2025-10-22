import Button from "@/components/Button";
import Phrase from "@/components/Typography/Phrase";
import clsx from "clsx";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../hooks/useTheme";

export default function Profile() {
  const { theme, toggleTheme } = useTheme();

  return (
    <SafeAreaView
      className={clsx("flex-1 gap-4 p-4", "dark:bg-gray-800 bg-white")}
    >
      <Phrase content="Profile Screen" />
      <Link href="/" className="text-blue-400">
        Go to Home
      </Link>
      <Button
        title={theme === "dark" ? "Light Mode" : "Dark Mode"}
        onPress={toggleTheme}
      />
    </SafeAreaView>
  );
}
