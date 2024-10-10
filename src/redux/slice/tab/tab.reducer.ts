import { ITabState } from "./tab.slice";

export const reducerCheapest = (state: ITabState) => {
  if (!state.cheapest) {
    state.cheapest = !state.cheapest;
    state.faster = false;
    state.optimal = false;
  }
};

export const reducerFaster = (state: ITabState) => {
  if (!state.faster) {
    state.cheapest = false;
    state.faster = !state.faster;
    state.optimal = false;
  }
};

export const reducerOptimal = (state: ITabState) => {
  if (!state.optimal) {
    state.cheapest = false;
    state.faster = false;
    state.optimal = !state.optimal;
  }
};
