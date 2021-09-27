import React, { ComponentPropsWithoutRef, useState } from "react";

import styles from "./button.module.css";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  onClick: () => void;
  children: React.ReactNode;
}
const Button = ({
  onClick,
  children,
  type,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const submitForm = () => {
    onClick();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <button
      type="button"
      onClick={submitForm}
      className={styles.button}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-30"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
