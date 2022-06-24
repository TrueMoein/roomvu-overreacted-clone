import { createSlice } from "@reduxjs/toolkit";

const theme = createSlice({
  name: "theme",
  initialState:
    typeof window !== "undefined"
      ? window.localStorage.getItem("theme")
      : "dark",
  reducers: {
    switchTheme(state) {
      state = state === "dark" ? "light" : "dark";
      document.body.className = state;
      localStorage.setItem("theme", state);

      return state;
    },
  },
});

export const { switchTheme } = theme.actions;
export default theme.reducer;
