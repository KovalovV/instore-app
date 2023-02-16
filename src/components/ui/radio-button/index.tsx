import { FC } from "react";
import clsx from "clsx";

import { RadioButtonProps } from "./types";

import styles from "./radio-button.module.scss";

export const RadioButton: FC<RadioButtonProps> = ({
  id,
  label,
  className,
  ...props
}) => {
  return (
    <label htmlFor={id} className={clsx(styles.label, className)}>
      <input id={id} type="radio" {...props} className={styles.input} />
      <span className={styles.radio} />
      {label}
    </label>
  );
};
