import clsx from "clsx";
import { Text } from "react-native";
export interface ButtonProps {
  content: string;
}

export default function Phrase({ content }: ButtonProps) {
  return (
    <Text
      className={clsx("text-2xl font-bold", "dark:text-white text-gray-800")}
    >
      {content}
    </Text>
  );
}
