import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slice/filter/filter.slice";
import tabSlice from "./slice/tab/tab.slice";
import { useDispatch, useSelector } from "react-redux";
import { api } from "./slice/Api/Api";
import ticketsSlice from "./slice/Tickets/tickets.slice";

const store = configureStore({
  reducer: {
    filter: filterSlice,
    tab: tabSlice,
    api: api.reducer,
    tickets: ticketsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<IAppDispatch>();
export const useAppSelector = useSelector.withTypes<IRootState>();

export default store;
