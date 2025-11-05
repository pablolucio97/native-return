import clsx from "clsx";
import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import {
  TextInput as RNTextInput,
  Text,
  TextInputProps,
  View,
} from "react-native";

interface TextInputComponentProps extends TextInputProps {
  label: string;
  containerClassName?: string;
  inputClassName?: string;
}

const TextInputBase: ForwardRefRenderFunction<
  RNTextInput,
  TextInputComponentProps
> = ({ label, containerClassName, inputClassName, ...rest }, ref) => {
  const [focused, setFocused] = useState(false);

  return (
    <View className={clsx("w-full", containerClassName)}>
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
        ref={ref}
        className={clsx(
          "w-full h-12 border border-gray-400 rounded-md p-2 pl-3 peer focus:border-primary-400",
          inputClassName
        )}
        aria-label={`input-${label}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      />
    </View>
  );
};
const TextInput = forwardRef<RNTextInput, TextInputComponentProps>(
  TextInputBase
);
export default TextInput;
