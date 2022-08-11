import { configureStore } from "@reduxjs/toolkit";
import nightModeSlice from "../feature/nightMode.slice";

export default configureStore({
  reducer: {
    nightMode: nightModeSlice,
  },
});
