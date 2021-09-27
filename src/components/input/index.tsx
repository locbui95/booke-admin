import { ComponentPropsWithoutRef } from "react";

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
}: InputProps) => {
  const inputStyle = {
    width: "80%",
    borderRadius: "10px",
    borderStyle: "solid",
    borderColor: "#808080",
    padding: "5px ",
    display: "block",
    borderWidth: "2px",
    outline: "none"
  };
  return (
    <input
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
      type={type}
      style={inputStyle}
    />
  );
};

export default Input;
