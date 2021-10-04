import { ChangeEvent } from "react";

import styles from "./switch.module.css";

interface SwitchProps {
  onChange: (value: boolean) => void;
  isChecked: boolean;
}

export default function Switch({ onChange, isChecked }: SwitchProps) {
  const onChangeSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    onChange(checked);
  };

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        onChange={onChangeSwitch}
        defaultChecked={isChecked}
      />
      <span className={styles.slider} />
    </label>
  );
}
