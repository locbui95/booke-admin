import { ChangeEvent } from "react";

import styles from "./switch.module.css";

interface SwitchProps {
  onChange: (value: boolean) => void;
  isCheck?: boolean;
}

export default function Switch({ onChange, isCheck }: SwitchProps) {
  const onChangeSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    onChange(checked);
  };

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        onChange={onChangeSwitch}
        defaultChecked={isCheck}
      />
      <span className={styles.slider} />
    </label>
  );
}
Switch.defaultProps = {
  isCheck: true
};
