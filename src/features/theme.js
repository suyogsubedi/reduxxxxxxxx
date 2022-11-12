import { createSlice } from "@reduxjs/toolkit";

const initialStateValue =""

// createSlice helps to create reducers
export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialStateValue },
  reducers: {
    changeColor: (state, action) => {
        // payload bhaneko user le kei pathaucha data tei
      state.value = action.payload;
    },
  },
});

export const {changeColor} = themeSlice.actions;
export default themeSlice.reducer;
