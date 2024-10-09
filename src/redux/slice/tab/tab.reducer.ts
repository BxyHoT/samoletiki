import { ITabState } from "./tab.slice";

export const reducerCheapest = (state: ITabState) => {
  state.cheapest = !state.cheapest;
  state.faster = false;
  state.optimal = false;
};

export const reducerFaster = (state: ITabState) => {
  state.cheapest = false;
  state.faster = !state.faster;
  state.optimal = false;
};

export const reducerOptimal = (state: ITabState) => {
  state.cheapest = false;
  state.faster = false;
  state.optimal = !state.optimal;
};
