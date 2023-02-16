import { FC } from "react";
import clsx from "clsx";

import { InputProps } from "./types";

import styles from "./input.module.scss";

export const Input: FC<InputProps> = ({
  size = "small",
  className,
  ...props
}) => {
  return (
    <input
      className={clsx(styles.root, styles[`size_${size}`], className)}
      {...props}
    />
  );
};
