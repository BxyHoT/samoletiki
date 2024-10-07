import style from "./RouteInfo.module.scss";

export const RouteInfo = () => {
  return (
    <div className={style.RouteInfo}>
      <p>
        <span>mow-hkt</span>
        <br />
        <span>10:45-08:00</span>
      </p>
      <p>
        <span>В пути</span>
        <br />
        <span>21ч 15м</span>
      </p>
      <p>
        <span>2 пересадки</span>
        <br />
        <span>HKG,JNB</span>
      </p>
    </div>
  );
};
