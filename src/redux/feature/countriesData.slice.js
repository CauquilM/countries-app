import { createSlice } from "@reduxjs/toolkit";

export const countriesDataSlice = createSlice({
  name: "countriesData",
  initialState: {
    countriesData: [],
  },
  reducers: {
    setCountriesData: (state, { payload }) => {
      state.countriesData = payload;
    },
  },
});

export const { setCountriesData } = countriesDataSlice.actions
export default countriesDataSlice.reducer
