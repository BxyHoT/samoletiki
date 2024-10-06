import { Tab } from "../Tab/Tab";
import style from "./Tabs.module.scss";

export const Tabs = () => {
  return (
    <form className={style.Tabs}>
      <Tab text="Самый дешевый" />
      <Tab text="Самый быстрый" />
      <Tab text="Оптимальный" />
    </form>
  );
};
