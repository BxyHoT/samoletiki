import style from "./Tab.module.scss";

interface ITabProp {
  text: string;
}
export const Tab = ({ text }: ITabProp) => {
  return (
    <label className={style.Tab}>
      <input type="radio" name="filter" />
      {text}
    </label>
  );
};
