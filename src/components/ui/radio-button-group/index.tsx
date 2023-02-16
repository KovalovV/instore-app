import { FC } from "react";
import clsx from "clsx";

import { RadioButtonGroupProps } from "./types";

import styles from "./radio-button-group.module.scss";

export const RadioButtonGroup: FC<RadioButtonGroupProps> = ({
  id,
  label,
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx(styles.root, className)}>
      <div>{label}</div>
      {children}
    </div>
  );
};
