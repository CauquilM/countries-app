import { configureStore } from "@reduxjs/toolkit";
import countriesDataSlice from "../feature/countriesData.slice";
import nightModeSlice from "../feature/nightMode.slice";

export default configureStore({
  reducer: {
    nightMode: nightModeSlice,
    countriesData: countriesDataSlice,
  },
});
