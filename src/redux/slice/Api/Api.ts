import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const ANOTHER_URL = "https://front-test.dev.aviasales.ru/tickets";

const BASE_URL = "https://aviasales-test-api.kata.academy/";
const SEARCHID_URL = "search";
const TICKETS_URL = "tickets?searchId=";

interface GetSessionIdDTO {
  searchId: string;
}

export interface ISegment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

export interface ITicket {
  price: number;
  carrier: string;
  segments: [ISegment, ISegment];
}

interface TicketsDTO {
  tickets: ITicket[];
  stop: boolean;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getSessionId: build.query<GetSessionIdDTO, void>({
      query: () => SEARCHID_URL,
    }),
    getTickets: build.query<TicketsDTO, string | undefined>({
      query: (searchId) => TICKETS_URL + searchId,
    }),
  }),
});

export const { useGetSessionIdQuery, useGetTicketsQuery } = api;
