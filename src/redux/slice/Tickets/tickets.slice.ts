import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { ITicket } from "../Api/Api";

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState: [] as ITicket[],
  reducers: {
    setTickets: (state, action: PayloadAction<ITicket[]>) => {
      state.push(...action.payload);
    },
  },
});

export const { setTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
