import { ChangeEvent } from "react";

import styles from "./switch.module.css";

// interface SwitchProps {
//   onChange: (value: boolean) => void;
// }

export default function Switch() {
  const onChangeSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={onChangeSwitch} />
      <span className={styles.slider} />
    </label>
  );
}
