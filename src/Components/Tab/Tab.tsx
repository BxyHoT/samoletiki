import React from "react";
import {
  setCheapest,
  setFaster,
  setOptimal,
} from "../../redux/slice/tab/tab.slice";
import { useAppDispatch } from "../../redux/store";
import style from "./Tab.module.scss";

interface ITabProp {
  text: string;
  isActive: boolean;
  handler: typeof setCheapest | typeof setFaster | typeof setOptimal;
}
const Tab = ({ text, isActive, handler }: ITabProp) => {
  const dispatch = useAppDispatch();

  return (
    <label className={style.Tab + " " + (isActive ? style.Active : "")}>
      <input
        type="radio"
        name="filter"
        defaultChecked={isActive}
        onClick={() => dispatch(handler())}
      />
      {text}
    </label>
  );
};

export default React.memo(Tab);
