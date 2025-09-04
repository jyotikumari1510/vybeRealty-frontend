import { useEffect } from "react";
import { useThemeStore } from "../store/themeStore";

const ColorPicker = () => {
  const { bgColor, setBgColor } = useThemeStore();

  useEffect(() => {
    document.documentElement.style.setProperty("--custom-bg-color", bgColor);
  }, [bgColor]);

  const handleChange = (e) => {
    const newColor = e.target.value;
    setBgColor(newColor);
    document.documentElement.style.setProperty("--custom-bg-color", newColor);
  };

  return (
    <input
      type="color"
      value={bgColor}
      onChange={handleChange}
      style={{
        width: "40px",
        height: "40px",
        border: "none",
        cursor: "pointer",
        marginLeft: "10px",
      }}
    />
  );
};

export default ColorPicker;
