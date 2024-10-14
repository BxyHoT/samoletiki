import React from "react";
import style from "./ShowMore.module.scss";

interface IShowMoreProps {
  handler: () => void;
}

export const ShowMore: React.FC<IShowMoreProps> = ({ handler }) => {
  return (
    <button className={style.ShowMore} type="button" onClick={handler}>
      Показать еще 5 билетов!
    </button>
  );
};
