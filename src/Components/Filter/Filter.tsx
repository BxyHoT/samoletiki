import styles from "./Filter.module.scss";
import { CheckBoxGroup } from "../CheckBoxGroup/CheckBoxGroup";

export const Filter = () => {
  return (
    <div className={styles.Filter}>
      <h2>Колличество пересадок</h2>
      <CheckBoxGroup />
    </div>
  );
};
