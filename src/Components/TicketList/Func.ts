import { IFilterState } from "../../redux/slice/filter/filter.slice";
import { ITabState } from "../../redux/slice/tab/tab.slice";
import { ITicket } from "../../redux/slice/Api/Api";

export const getTabFilter = (tab: ITabState) => {
  if (tab.faster) {
    return (a: ITicket, b: ITicket) =>
      a.segments[0].duration - b.segments[0].duration;
  }

  if (tab.optimal) {
    return (a: ITicket, b: ITicket) =>
      b.segments[0].duration / b.price - a.segments[0].duration / a.price;
  }

  return (a: ITicket, b: ITicket) => a.price - b.price;
};

export const getFilter = (
  filter: IFilterState,
  tickets: ITicket[]
): ITicket[] => {
  let filteredNoOne: ITicket[];
  let filteredOne: ITicket[];
  let filteredTwo: ITicket[];
  let filteredThree: ITicket[];
  let AllTickets: ITicket[] = [];

  if (filter.noOne) {
    filteredNoOne = tickets.filter(
      (ticket) => ticket.segments[0].stops.length === 0
    );

    AllTickets = filteredNoOne;
  }

  if (filter.one) {
    filteredOne = tickets.filter(
      (ticket) => ticket.segments[0].stops.length === 1
    );

    AllTickets = [...AllTickets, ...filteredOne];
  }

  if (filter.two) {
    filteredTwo = tickets.filter(
      (ticket) => ticket.segments[0].stops.length === 2
    );

    AllTickets = [...AllTickets, ...filteredTwo];
  }

  if (filter.three) {
    filteredThree = tickets.filter(
      (ticket) => ticket.segments[0].stops.length === 3
    );

    AllTickets = [...AllTickets, ...filteredThree];
  }

  return AllTickets;
};
