import style from "./TicketList.module.scss";
import { Ticket } from "../Ticket/Ticket";
import {
  useGetSessionIdQuery,
  useGetTicketsQuery,
} from "../../redux/slice/Api/Api";
import { ShowMore } from "../ShowMore/ShowMore";
import { useAppSelector } from "../../redux/store";
import { getTabFilter, getFilter } from "./Func";
import img from "../../assets/rkn.jpg";
import { useEffect, useState } from "react";

export const TicketList = () => {
  const { isLoading, isError, data: searchId } = useGetSessionIdQuery();
  const filter = useAppSelector(({ filter }) => filter);
  const tabFilter = useAppSelector(({ tab }) => tab);
  const [showMore, setShowMore] = useState(5);

  useEffect(() => {
    setShowMore(5);
  }, [filter.all, filter.noOne, filter.one, filter.two, filter.three]);

  const {
    isError: ticketsError,
    isLoading: ticketsLoading,
    data: tickets,
  } = useGetTicketsQuery(searchId ? searchId.searchId : undefined, {
    skip: !searchId,
  });

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

  const filteredTikets = getFilter(filter, tickets!.tickets).toSorted(
    getTabFilter(tabFilter)
  );

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
              key={ticket.carrier + ticket.price + ticket.segments[0].date}
              ticket={ticket}
            />
          );
        })}
      </ul>
      <ShowMore handler={showMoreHandler} />
    </>
  );
};
