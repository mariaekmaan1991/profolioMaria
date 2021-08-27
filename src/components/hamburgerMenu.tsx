import Link from "next/link";
import styles from "../../styles/HamburgerMenu.module.scss";

export default function HamburgerMenu() {
  return (
    <div className={styles.ButtonNavMainBox}>
      <div className={styles.ButtonNavBox}></div>
      <div className={styles.ButtonNavBox}></div>
      <div className={styles.ButtonNavBox}></div>
    </div>
  );
}
