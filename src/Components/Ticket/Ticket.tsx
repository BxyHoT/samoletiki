import styles from "./Ticket.module.scss";
import { RouteInfo } from "../RouteInfo/RouteInfo";

export const Ticket = () => {
  return (
    <li className={styles.Ticket}>
      <div>
        <h3>13 400P</h3>
        <img src="" alt="Logo" />
      </div>
      <RouteInfo />
      <RouteInfo />
    </li>
  );
};
