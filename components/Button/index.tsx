import { Pressable, Text } from "react-native";
export interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <Pressable
      className={`bg-blue-400 ios:bg-green-400 w-fit h-12 p-2 items-center justify-center rounded-md `}
      onPress={onPress}
    >
      <Text className="text-white text-lg">{title}</Text>
    </Pressable>
  );
}
