import styles from "./Header.module.scss";
import Logo from "../../assets/Logo.svg";

export const Header = () => {
  return (
    <h1 className={styles.Header}>
      <a href="#">
        <img src={Logo} alt="Logo" />
      </a>
    </h1>
  );
};
