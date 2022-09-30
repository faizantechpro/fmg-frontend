import { useEffect, useState } from "react";
import dark from "./styles/dark.json";
import light from "./styles/light.json";

function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );
  const [themes, setThemes] = useState(dark);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    if (theme == "dark") {
      setThemes(dark);
    } else {
      setThemes(light);
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme, themes]);

  return [colorTheme, setTheme, themes];
}

export default useDarkMode;
