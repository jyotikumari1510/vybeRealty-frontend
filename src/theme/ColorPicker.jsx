import { useEffect } from "react";
import { useThemeStore } from "../store/themeStore";

const ColorPicker = () => {
  const { bgColor, setBgColor } = useThemeStore();
  const { textColor, setTextColor } = useThemeStore();

  useEffect(() => {
    document.documentElement.style.setProperty("--custom-bg-color", bgColor);
    document.documentElement.style.setProperty(
      "--custom-text-color",
      textColor
    );
  }, [bgColor, textColor]);

  const handleChange = (e) => {
    const newColor = e.target.value;
    setBgColor(newColor);
    document.documentElement.style.setProperty("--custom-bg-color", newColor);
  };

  const handleChangeText = (e) => {
    const newColor = e.target.value;
    setTextColor(newColor);
    document.documentElement.style.setProperty("--custom-text-color", newColor);
  };

  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <span style={{ marginRight: "8px" }}>Text:</span>
        <input
          type="color"
          value={textColor}
          onChange={handleChangeText}
          style={{
            width: "40px",
            height: "40px",
            border: "none",
            cursor: "pointer",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <span style={{ marginRight: "8px" }}>BG:</span>
        <input
          type="color"
          value={bgColor}
          onChange={handleChange}
          style={{
            width: "40px",
            height: "40px",
            border: "none",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
