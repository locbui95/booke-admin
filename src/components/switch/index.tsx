import { ChangeEvent } from "react";

import styles from "./switch.module.css";

interface SwitchProps {
  onClickSwitch: (status: boolean) => void;
}

export default function Switch({ onClickSwitch }: SwitchProps) {
  const hanldeChangeSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    onClickSwitch(e.target.checked);
  };
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={hanldeChangeSwitch} />
      <span className={styles.slider} />
    </label>
  );
}
