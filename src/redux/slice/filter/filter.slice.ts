import { createSlice } from "@reduxjs/toolkit";
import {
  reducerAll,
  reducerNoOne,
  reducerOne,
  reducerTwo,
  reducerThree,
} from "./filter.reducer";

export type IFilterState = {
  all: boolean;
  noOne: boolean;
  one: boolean;
  two: boolean;
  three: boolean;
};

const initialState: IFilterState = {
  all: true,
  noOne: true,
  one: true,
  two: true,
  three: true,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setAll: reducerAll,
    setNoOne: reducerNoOne,
    setOne: reducerOne,
    setTwo: reducerTwo,
    setThree: reducerThree,
  },
});

export const { setAll, setNoOne, setOne, setTwo, setThree } =
  filterSlice.actions;
export default filterSlice.reducer;
