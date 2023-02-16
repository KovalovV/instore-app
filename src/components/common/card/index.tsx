import { FC } from "react";
import clsx from "clsx";

import { CardProps } from "./types";

import styles from "./card.module.scss";

export const Card: FC<CardProps> = ({
  color = "gray50",
  padding = "xs",
  borderRadius = "sm",
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(
        styles.root,
        styles[`padding_${padding}`],
        styles[`borderRadius_${borderRadius}`],
        styles[`color_${color}`],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
