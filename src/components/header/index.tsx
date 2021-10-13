import { useHistory } from "react-router";

import avatar from "assets/avt.jpg";
import styles from "./header.module.css";

export default function Header() {
  const history = useHistory();
  const hanldeLogout = (): void => {
    localStorage.removeItem(`accessToken`);
    history.push("/login");
  };

  return (
    <div className="fixed top-0 right-0 flex left-80 bg-white z-40 justify-end h-24 items-center content shadow-sm">
      <div className="flex items-center">
        <div className={styles.button}>
          <img src={avatar} alt="" />
          <div className={styles.logout} onClick={hanldeLogout}>
            LOG OUT
          </div>
        </div>
      </div>
    </div>
  );
}
