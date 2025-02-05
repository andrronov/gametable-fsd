import { useColorMode } from "@vueuse/core"
import { defineStore } from "pinia"

export const useAppStore = defineStore("app", () => {
    const { system: systemTheme, store: storedTheme } = useColorMode({
        selector: "#app",
        attribute: "data-color-mode",
        modes: {
            light: "light",
            dark: "dark",
        },
        initialValue: "light",
        storageKey: "app-theme",
    });

    const toggleTheme = () => {
        storedTheme.value = storedTheme.value === "light" ? "dark" : "light";
    }

    return {
        systemTheme,
        storedTheme,
        toggleTheme,
    }
})