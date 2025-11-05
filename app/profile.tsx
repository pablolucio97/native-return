import Button from "@/components/Button";
import Phrase from "@/components/Typography/Phrase";
import Subtitle from "@/components/Typography/Subtile";
import Title from "@/components/Typography/Title";
import TextInput from "@/components/inputs/TextInput";
import clsx from "clsx";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../hooks/useTheme";
import PasswordTextInput from "@/components/inputs/PasswordTextInput";

export default function Profile() {
  const { theme, toggleTheme } = useTheme();

  return (
    <SafeAreaView
      className={clsx("flex-1 gap-4 p-4", "dark:bg-gray-800 bg-white")}
    >
      <Title content="Title text" />
      <Subtitle content="Title text" />
      <Phrase content="Phrase text lorem ipsum is a color dumb set coloiest" />
      <Link href="/" className="text-blue-400">
        Go to Home
      </Link>
      <TextInput label="Input Label" />
      <PasswordTextInput label="Password" />
      <Button
        title={theme === "dark" ? "Light Mode" : "Dark Mode"}
        onPress={toggleTheme}
      />
    </SafeAreaView>
  );
}
