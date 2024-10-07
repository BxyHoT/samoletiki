import style from "./ShowMore.module.scss";

export const ShowMore = () => {
  return (
    <button className={style.ShowMore} type="button">
      Показать еще 5 билетов!
    </button>
  );
};
