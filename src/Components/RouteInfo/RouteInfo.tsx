import style from "./RouteInfo.module.scss";
import { ISegment } from "../../redux/slice/Api/Api";
import { add } from "date-fns";

interface IRouteInfoProps {
  segments: ISegment;
}

export const RouteInfo = ({
  segments: { origin, destination, date, stops, duration },
}: IRouteInfoProps) => {
  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}ч ${remainingMinutes}м`;
  };

  return (
    <div className={style.RouteInfo}>
      <p>
        <span>{origin + " - " + destination}</span>
        <br />
        <span>10:45-08:00</span>
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
