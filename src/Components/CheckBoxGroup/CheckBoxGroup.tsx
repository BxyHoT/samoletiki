import { CheckBox } from "../CheckBox/CheckBox";
import {
  setAll,
  setNoOne,
  setOne,
  setTwo,
  setThree,
} from "../../redux/slice/filter/filter.slice";
import { useAppSelector } from "../../redux/store";

export const CheckBoxGroup = () => {
  const { all, noOne, one, two, three } = useAppSelector(
    (state) => state.filter
  );
  return (
    <>
      <CheckBox text="Все" handler={setAll} isActive={all} />
      <CheckBox text="Без пересадок" handler={setNoOne} isActive={noOne} />
      <CheckBox text="1 пересадка" handler={setOne} isActive={one} />
      <CheckBox text="2 пересадки" handler={setTwo} isActive={two} />
      <CheckBox text="3 пересадки" handler={setThree} isActive={three} />
    </>
  );
};
