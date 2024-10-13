import { useAppDispatch } from "../../redux/store";
import style from "./CheckBox.module.scss";
import {
  setAll,
  setNoOne,
  setOne,
  setTwo,
  setThree,
} from "../../redux/slice/filter/filter.slice";
import React from "react";

interface ICheckBoxProp {
  text: string;
  handler:
    | typeof setAll
    | typeof setNoOne
    | typeof setOne
    | typeof setTwo
    | typeof setThree;
  isActive: boolean;
}

const CheckBox = ({ text, handler, isActive }: ICheckBoxProp) => {
  const dispatch = useAppDispatch();

  return (
    <label className={style.CheckBoxWrapper}>
      <input
        type="checkbox"
        onChange={() => dispatch(handler())}
        checked={isActive}
      />
      <span className={style.CheckBox}></span>
      <span>{text}</span>
    </label>
  );
};

export default React.memo(CheckBox);
