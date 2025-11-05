import clsx from "clsx";
import { ActivityIndicator, Pressable, Text } from "react-native";
export interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  className?: string;
}

export default function Button({
  title,
  onPress,
  loading,
  className,
}: ButtonProps) {
  return (
    <Pressable
      className={clsx(
        "bg-primary-400 w-fit h-12 p-2 items-center justify-center rounded-md",
        className
      )}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className="text-white text-lg">{title}</Text>
      )}
    </Pressable>
  );
}
