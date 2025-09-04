// store/themeStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: "dark",
      bgColor: "var(--custom-bg-color)",
      textColor: "var(--custom-text-color)",
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set({ theme: get().theme === "dark" ? "light" : "dark" }),
      setBgColor: (color) => set({ bgColor: color }),
      setTextColor: (color) => set({ textColor: color }),
    }),
    {
      name: "theme-storage",
    }
  )
);
