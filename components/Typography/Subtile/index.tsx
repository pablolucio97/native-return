import clsx from "clsx";
import { Text } from "react-native";
export interface SubtitleProps {
  content: string;
  className?: string;
}

export default function Subtitle({ content, className }: SubtitleProps) {
  return (
    <Text
      className={clsx(
        "text-xl font-semibold",
        "text-light-title dark:text-dark-title",
        className
      )}
    >
      {content}
    </Text>
  );
}
