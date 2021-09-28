import { ComponentPropsWithoutRef } from "react";

import "./spinner.styles.css";

interface SpinnerProps extends ComponentPropsWithoutRef<"div"> {}

const Spinner = ({ className, ...props }: SpinnerProps) => (
  <div className={`loader ${className}`} {...props}>
    {""}
  </div>
);

export default Spinner;
