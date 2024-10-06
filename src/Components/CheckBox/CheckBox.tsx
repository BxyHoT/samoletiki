import style from "./CheckBox.module.scss";

interface ICheckBoxProp {
  text: string;
}

export const CheckBox = ({ text }: ICheckBoxProp) => {
  return (
    <label className={style.CheckBox}>
      <input type="checkbox" />
      <span>{text}</span>
    </label>
  );
};
