import style from "./TicketList.module.scss";
import Ticket from "../Ticket/Ticket";
import {
  useGetSessionIdQuery,
  useGetTicketsQuery,
} from "../../redux/slice/Api/Api";
import { ShowMore } from "../ShowMore/ShowMore";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getTabFilter, getFilter } from "./Func";
import img from "../../assets/rkn.jpg";
import { useEffect, useMemo, useState } from "react";
import { setTickets } from "../../redux/slice/Tickets/tickets.slice";

export const TicketList = () => {
  const { isLoading, isError, data: searchId } = useGetSessionIdQuery();
  const filter = useAppSelector(({ filter }) => filter);
  const tabFilter = useAppSelector(({ tab }) => tab);
  const [showMore, setShowMore] = useState(5);
  const dispatch = useAppDispatch();

  const {
    isError: ticketsError,
    isLoading: ticketsLoading,
    data: ticketsData,
    refetch: ticketsRefetch,
  } = useGetTicketsQuery(searchId ? searchId.searchId : undefined, {
    skip: !searchId,
  });

  const tickets = useAppSelector(({ tickets }) => tickets);

  useEffect(() => {
    setShowMore(5);

    if (
      !ticketsLoading &&
      ticketsData &&
      !ticketsError &&
      ticketsData.tickets.length !== tickets.length
    ) {
      dispatch(setTickets(ticketsData.tickets));

      if (!ticketsData.stop) {
        // setTimeout(ticketsRefetch, 30000);
      }
    }
  }, [
    ticketsLoading,
    ticketsError,
    ticketsData,
    filter.all,
    filter.noOne,
    filter.one,
    filter.two,
    filter.three,
    dispatch,
    ticketsRefetch,
    tickets.length,
  ]);

  const filteredTikets = useMemo(() => {
    return getFilter(filter, tickets).toSorted(getTabFilter(tabFilter));
  }, [filter, tickets, tabFilter]);

  if (isLoading || ticketsLoading) {
    return (
      <>
        <h1 className={style.Loading}>Loading...</h1>
        <img src={img} alt="RKN" className={style.img} />
      </>
    );
  }
  if (isError || ticketsError) {
    return (
      <>
        <h1 className={style.Error}>Error</h1>
        <img src={img} alt="RKN" className={style.img} />
      </>
    );
  }

  const showMoreHandler = () => {
    setShowMore((showMore) => showMore + 5);
  };

  if (filteredTikets.length === 0) {
    return <h1 className={style.NoResult}>Нишего нету нашаника(</h1>;
  }

  return (
    <>
      <ul className={style.TicketList}>
        {filteredTikets.slice(0, showMore).map((ticket) => {
          return (
            <Ticket
              key={
                ticket.carrier +
                ticket.price +
                ticket.segments[0].date +
                ticket.segments[0].duration
              }
              ticket={ticket}
            />
          );
        })}
      </ul>
      <ShowMore handler={showMoreHandler} />
    </>
  );
};
