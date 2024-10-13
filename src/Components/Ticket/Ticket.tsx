import styles from "./Ticket.module.scss";
import { RouteInfo } from "../RouteInfo/RouteInfo";
import { ITicket } from "../../redux/slice/Api/Api";

interface ITicketProps {
  ticket: ITicket;
}

export const Ticket = ({
  ticket: { price, segments, carrier },
}: ITicketProps) => {
  const forth = segments[0];
  const back = segments[1];

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
  };

  return (
    <li className={styles.Ticket}>
      <div>
        <h3>{formatPrice(price)}</h3>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="Logo" />
      </div>
      <RouteInfo segments={forth} />
      <RouteInfo segments={back} />
    </li>
  );
};
