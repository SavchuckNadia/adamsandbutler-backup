import { Outlet } from "react-router-dom";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import Menu from "../Menu/Menu";
import styles from "./Header.module.scss"

export default function Header() {
  return (
    <div className={styles.header_wrapper}>
      <Menu />
      <HeaderBanner />
      <Outlet />
    </div>
  );
}
