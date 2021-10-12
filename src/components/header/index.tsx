import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "store";
import avatar from "assets/avt.jpg";
import styles from "./header.module.css";

export default function Header() {
  const history = useHistory();
  const { infoUser: user } = useSelector((state: RootState) => state.users);
  const hanldeLogout = (): void => {
    history.push("/login");
    Object(user).email = "";
  };
  return (
    <div className="fixed top-0 right-0 flex left-80 bg-white z-40 justify-end h-24 items-center content shadow-sm">
      <div className="flex items-center">
        <a className={styles.button} href="" onClick={hanldeLogout}>
          <img src={avatar} alt="" />
          <div className={styles.logout}>LOG OUT</div>
        </a>
      </div>
    </div>
  );
}
