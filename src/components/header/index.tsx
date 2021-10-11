import avatar from "assets/avt.jpg";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className="fixed top-0 right-0 flex left-80 bg-white z-40 justify-end h-24 items-center content shadow-sm">
      <div className="flex items-center">
        <a className={styles.button} href="">
          <img src={avatar} alt="" />
          <div className={styles.logout}>LOG OUT</div>
        </a>
      </div>
    </div>
  );
}
