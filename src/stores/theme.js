import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
    state: () => ({
        theme: "bg-white"
    }),
    actions: {
        getLight() {
            this.theme = "bg-white";
        },
        getDark() {
            this.theme = "bg-black";
        }
    }
});