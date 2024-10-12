import style from "./TicketList.module.scss";
import { Ticket } from "../Ticket/Ticket";
import {
  useGetSessionIdQuery,
  useGetTicketsQuery,
} from "../../redux/slice/Api/Api";
import { ShowMore } from "../ShowMore/ShowMore";

export const TicketList = () => {
  const { isLoading, isError, data: searchId } = useGetSessionIdQuery();

  const {
    isError: ticketsError,
    isLoading: ticketsLoading,
    data: tickets,
  } = useGetTicketsQuery(searchId!.searchId);

  if (isLoading && ticketsLoading) {
    return <h1 className={style.Loading}>Loading...</h1>;
  }
  if (isError && ticketsError) {
    return <h1 className={style.Error}>Error</h1>;
  }

  return (
    <>
      <ul className={style.TicketList}>
        {tickets!.tickets.map((ticket) => {
          return (
            <Ticket
              key={ticket.carrier + ticket.price + ticket.segments[0].date}
              ticket={ticket}
            />
          );
        })}
      </ul>
      <ShowMore />
    </>
  );
};
