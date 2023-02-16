import { FC } from "react";
import clsx from "clsx";

import { ButtonProps } from "./types";

import styles from "./button.module.scss";

export const Button: FC<ButtonProps> = ({
  size = "small",
  variant = "solid",
  color = "white",
  fullWidth = true,
  disabled,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles.root,
        fullWidth && styles.fullWidth,
        styles[`size_${size}`],
        styles[`variant_${variant}`],
        styles[`color_${color}`],
        disabled && styles.disabled,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
