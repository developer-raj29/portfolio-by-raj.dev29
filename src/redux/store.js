import { configureStore } from "@reduxjs/toolkit";
import dataSlices from "./slices/dataSlice";

const store = configureStore({
  reducer: {
    data: dataSlices,
  },
});

export default store;
