import { Feather } from "@expo/vector-icons";
import clsx from "clsx";
import { ForwardRefRenderFunction, forwardRef, useMemo, useState } from "react";
import {
  Pressable,
  TextInput as RNTextInput,
  Text,
  TextInputProps,
  View,
} from "react-native";

export interface PasswordTextInputProps extends TextInputProps {
  label?: string;
  containerClassName?: string;
  inputClassName?: string;
}

const PasswordTextInputBase: ForwardRefRenderFunction<
  RNTextInput,
  PasswordTextInputProps
> = ({ label, containerClassName, inputClassName, style, ...rest }, ref) => {
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(true);

  const eyeIcon = useMemo(() => (hidden ? "eye" : "eye-off"), [hidden]);

  return (
    <View className={clsx("w-full", containerClassName)}>
      {!!label && (
        <Text
          className={clsx(
            focused ? "font-bold" : "font-semibold",
            "text-light-title dark:text-dark-title mb-1"
          )}
          accessibilityRole="text"
        >
          {label}
        </Text>
      )}

      <View className="relative w-full">
        <RNTextInput
          ref={ref}
          secureTextEntry={hidden}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={clsx(
            "w-full h-12 rounded-md p-2 pl-3 pr-10",
            "text-light-text dark:text-dark-text",
            "border border-light-border dark:border-dark-border",
            "focus:border-primary-400",
            "placeholder:text-light-text/60 dark:placeholder:text-dark-text/60",
            inputClassName
          )}
          style={style}
          {...rest}
        />

        {/* Toggle password visibility */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={hidden ? "Show password" : "Hide password"}
          onPress={() => setHidden((v) => !v)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
          hitSlop={8}
        >
          {/* Wrap icon in Text so it inherits token color via class */}
          <Text className="text-light-text/70 dark:text-dark-text/70">
            <Feather name={eyeIcon} size={20} />
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const PasswordTextInput = forwardRef<RNTextInput, PasswordTextInputProps>(
  PasswordTextInputBase
);
export default PasswordTextInput;
