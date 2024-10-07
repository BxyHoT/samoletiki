import style from "./TicketList.module.scss";
import { Ticket } from "../Ticket/Ticket";

export const TicketList = () => {
  return (
    <ul className={style.TicketList}>
      <Ticket />
    </ul>
  );
};
