import style from "./RouteInfo.module.scss";
import { ISegment } from "../../redux/slice/Api/Api";
import { formatTime, formatDate } from "./Func";

interface IRouteInfoProps {
  segments: ISegment;
}

export const RouteInfo = ({
  segments: { origin, destination, date, stops, duration },
}: IRouteInfoProps) => {
  return (
    <div className={style.RouteInfo}>
      <p>
        <span>{origin + " - " + destination}</span>
        <br />
        <span>{formatDate(date, duration)}</span>
      </p>
      <p>
        <span>В пути</span>
        <br />
        <span>{formatTime(duration)}</span>
      </p>
      <p>
        <span>{stops.length} пересадки</span>
        <br />
        <span>{stops.join(",")}</span>
      </p>
    </div>
  );
};
