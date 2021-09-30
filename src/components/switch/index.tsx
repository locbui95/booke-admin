import styles from "./switch.module.css";

interface SwitchProps {
  onClickSwitch: (status: boolean) => void;
}

export default function Switch({ onClickSwitch }: SwitchProps) {
  const hanldeChangeSwitch = (e: any) => {
    onClickSwitch(e.target.checked);
  };
  return (
    <label className={styles.switch}>
      <input type="checkbox" onClick={hanldeChangeSwitch} />
      <span className={styles.slider} />
    </label>
  );
}
