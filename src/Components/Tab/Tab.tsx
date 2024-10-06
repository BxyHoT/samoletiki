import { useState } from "react";
import style from "./Tab.module.scss";

interface ITabProp {
  text: string;
}
export const Tab = ({ text }: ITabProp) => {
  const [checked, setChecked] = useState(false);
  const onChange = () => {
    console.log(checked);
    setChecked((checked) => {
      return !checked;
    });
  };

  return (
    <label className={style.Tab + ` ${checked ? style.checked : ""}`}>
      <input type="radio" name="filter" onChange={onChange} />
      {text}
    </label>
  );
};
