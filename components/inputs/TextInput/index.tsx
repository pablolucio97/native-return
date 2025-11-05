import clsx from "clsx";
import { useRef, useState } from "react";
import { TextInput as RNTextInput, Text, View } from "react-native";

interface TextInputProps {
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({ label }) => {
  const inputRef = useRef<RNTextInput>(null);
  const [focused, setFocused] = useState(false);

  return (
    <View className="w-full">
      <Text
        className={clsx(
          `${focused ? "font-bold " : "font-semibold "}`,
          "text-light-title dark:text-dark-title",
          "mb-1"
        )}
      >
        {label}
      </Text>
      <RNTextInput
        ref={inputRef}
        className={clsx(
          "w-full h-12 border border-gray-400 rounded-md p-2 pl-3 peer focus:border-primary-400"
        )}
        aria-label={`input-${label}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  );
};
export default TextInput;
