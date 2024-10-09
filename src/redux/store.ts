import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slice/filter/filter.slice";
import tabSlice from "./slice/tab/tab.slice";

const store = configureStore({
  reducer: {
    filter: filterSlice,
    tab: tabSlice,
  },
});

export default store;
