import { createSlice } from "@reduxjs/toolkit";
import { reducerCheapest, reducerFaster, reducerOptimal } from "./tab.reducer";

export type ITabState = {
  cheapest: boolean;
  faster: boolean;
  optimal: boolean;
};

const initialState: ITabState = {
  cheapest: true,
  faster: false,
  optimal: false,
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setCheapest: reducerCheapest,
    setFaster: reducerFaster,
    setOptimal: reducerOptimal,
  },
});

export const { setCheapest, setFaster, setOptimal } = tabSlice.actions;
export default tabSlice.reducer;
