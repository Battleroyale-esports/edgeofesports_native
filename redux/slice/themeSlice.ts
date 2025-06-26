import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColorSchemeName, useColorScheme } from "react-native";

interface ThemeState {
  theme: ColorSchemeName;
}

const initialState: ThemeState = {
  theme: useColorScheme(),
//   theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;