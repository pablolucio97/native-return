import Phrase from "@/components/Typography/Phrase";
import clsx from "clsx";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Home() {
  return (
    <SafeAreaView
      className={clsx("flex-1 gap-4 p-4", "dark:bg-gray-800 bg-white")}
    >
      <Phrase content="Home Screen" />
      <Link href="/profile" className="text-blue-400">
        Go to Profile
      </Link>
    </SafeAreaView>
  );
}
