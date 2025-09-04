// store/themeStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: "dark", // default dark
      bgColor: "#1e1e1e", // default dark background
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set({ theme: get().theme === "dark" ? "light" : "dark" }),
      setBgColor: (color) => set({ bgColor: color }),
    }),
    {
      name: "theme-storage",
    }
  )
);
