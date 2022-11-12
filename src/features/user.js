import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: "" };

// createSlice helps to create reducers
export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    // state holds the current value
    // action helps to change the current state
    login: (state, action) => {
        // payload bhaneko user le kei pathaucha data tei
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = initialStateValue
    },
  },
});

export const { login,logout } = userSlice.actions;
export default userSlice.reducer;
