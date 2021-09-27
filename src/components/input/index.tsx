import React from "react";

interface InputProps {
  placeholder: string;
  defaultValue: any;
  name: string;
  type: string;
  onChange(e: any): void;
}
const CustomInput: React.FC<InputProps> = ({
  type,
  name,
  onChange,
  defaultValue,
  placeholder
}) => (
  <input
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    defaultValue={defaultValue}
    type={type}
    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  />
);

export default CustomInput;
