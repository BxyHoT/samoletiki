import {
  setCheapest,
  setFaster,
  setOptimal,
} from "../../redux/slice/tab/tab.slice";
import { useAppSelector } from "../../redux/store";
import { Tab } from "../Tab/Tab";
import style from "./Tabs.module.scss";

export const Tabs = () => {
  const { cheapest, faster, optimal } = useAppSelector((state) => state.tab);

  return (
    <form className={style.Tabs}>
      <Tab text="Самый дешевый" isActive={cheapest} handler={setCheapest} />
      <Tab text="Самый быстрый" isActive={faster} handler={setFaster} />
      <Tab text="Оптимальный" isActive={optimal} handler={setOptimal} />
    </form>
  );
};
