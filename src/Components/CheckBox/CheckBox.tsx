import style from "./CheckBox.module.scss";

interface ICheckBoxProp {
  text: string;
}

export const CheckBox = ({ text }: ICheckBoxProp) => {
  return (
    <label className={style.CheckBoxWrapper}>
      <input type="checkbox" />
      <span className={style.CheckBox}></span>
      <span>{text}</span>
    </label>
  );
};
