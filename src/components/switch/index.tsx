import { ChangeEvent } from "react";

import styles from "./switch.module.css";

interface SwitchProps {
  onChange: (value: boolean) => void;
}

export default function Switch({ onChange }: SwitchProps) {
  const onChangeSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    onChange(checked);
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={onChangeSwitch} defaultChecked />
      <span className={styles.slider} />
    </label>
  );
}
