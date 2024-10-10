import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slice/filter/filter.slice";
import tabSlice from "./slice/tab/tab.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    filter: filterSlice,
    tab: tabSlice,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<IAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default store;
