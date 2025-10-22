import { useColorScheme } from "nativewind";
import { createContext, ReactNode, useMemo } from "react";

interface ThemeContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { colorScheme, setColorScheme } = useColorScheme(); // "light" | "dark" | "system"

  const { theme, toggleTheme } = useMemo(() => {
    return {
      theme: colorScheme === "dark" ? "dark" : ("light" as "light" | "dark"),
      toggleTheme: () => {
        colorScheme === "dark"
          ? setColorScheme("light")
          : setColorScheme("dark");
      },
    };
  }, [colorScheme, setColorScheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
