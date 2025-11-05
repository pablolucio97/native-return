import clsx from "clsx";
import { Text } from "react-native";
export interface TitleProps {
  content: string;
  className?: string;
}

export default function Title({ content, className }: TitleProps) {
  return (
    <Text
      className={clsx(
        "text-2xl font-bold",
        "text-light-title dark:text-dark-title",
        className
      )}
    >
      {content}
    </Text>
  );
}
