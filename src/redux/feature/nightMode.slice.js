import { createSlice } from "@reduxjs/toolkit";

export const nightModeSlice = createSlice({
  name: "nightMode",
  initialState: {
    nightMode: false,
  },
  reducers: {
    setNightMode: (state) => {
      if (state.nightMode === false) {
        state.nightMode = true;
        console.log(state.nightMode);
      } else {
        state.nightMode = false;
        console.log(state.nightMode);
      }
    },
  },
});

export const { setNightMode } = nightModeSlice.actions;
export default nightModeSlice.reducer;
