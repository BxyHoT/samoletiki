import { CheckBox } from "../CheckBox/CheckBox";

export const CheckBoxGroup = () => {
  return (
    <>
      <CheckBox text="Все" />
      <CheckBox text="Без пересадок" />
      <CheckBox text="1 пересадка" />
      <CheckBox text="2 пересадки" />
      <CheckBox text="3 пересадки" />
    </>
  );
};
