import { useEffect } from "react";
import { useThemeStore } from "../store/themeStore";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === "light" ? (
        <MdSunny size={30} style={{ color: "yellow" }} />
      ) : (
        <IoMoon size={30} style={{ color: "white" }} />
      )}
    </button>
  );
};

export default ThemeToggler;
