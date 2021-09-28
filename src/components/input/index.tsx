import { ComponentPropsWithoutRef } from "react";

import styles from "./input.module.css";

interface InputProps extends ComponentPropsWithoutRef<"input"> {}

const Input = ({ ...props }: InputProps) => (
  <input {...props} className={styles.inputStyle} />
);

export default Input;
