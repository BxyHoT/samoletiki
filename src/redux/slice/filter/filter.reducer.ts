import { IFilterState } from "./filter.slice";

export const reducerAll = (state: IFilterState) => {
  if (!state.all) {
    state.all = !state.all;
    state.noOne = true;
    state.one = true;
    state.two = true;
    state.three = true;
  } else {
    state.all = !state.all;
    state.noOne = false;
    state.one = false;
    state.two = false;
    state.three = false;
  }
};

export const reducerNoOne = (state: IFilterState) => {
  if (state.all) {
    state.all = false;
    state.noOne = !state.noOne;
  }
  if (state.one && state.two && state.three && !state.noOne) {
    reducerAll(state);
  }
  state.noOne = !state.noOne;
};

export const reducerOne = (state: IFilterState) => {
  if (state.all) {
    state.all = false;
    state.one = !state.one;
  }
  if (state.noOne && state.two && state.three && !state.one) {
    reducerAll(state);
  }
  state.one = !state.one;
};

export const reducerTwo = (state: IFilterState) => {
  if (state.all) {
    state.all = false;
    state.two = !state.two;
  }
  if (state.noOne && state.one && state.three && !state.two) {
    reducerAll(state);
  }
  state.two = !state.two;
};

export const reducerThree = (state: IFilterState) => {
  if (state.all) {
    state.all = false;
    state.three = !state.three;
  }
  if (state.noOne && state.one && state.two && !state.three) {
    reducerAll(state);
  }
  state.three = !state.three;
};
