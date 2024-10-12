import { useAppDispatch } from "../../redux/store";
import style from "./CheckBox.module.scss";
import {
  setAll,
  setNoOne,
  setOne,
  setTwo,
  setThree,
} from "../../redux/slice/filter/filter.slice";

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

export const CheckBox = ({ text, handler, isActive }: ICheckBoxProp) => {
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
