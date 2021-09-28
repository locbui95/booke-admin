import React, { ComponentPropsWithoutRef } from "react";

import styles from "./input.module.css";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  placeholder: string;
  defaultValue: any;
  name: string;
  type: string;
  onChange(e: any): void;
}
const Input = ({
  type,
  name,
  onChange,
  defaultValue,
  placeholder
}: InputProps) => (
  <input
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    defaultValue={defaultValue}
    type={type}
    className={styles.inputStyle}
  />
);

export default Input;
