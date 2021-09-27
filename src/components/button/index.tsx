import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}
const CustomButton: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

export default CustomButton;
