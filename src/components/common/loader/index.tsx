import { FC } from "react";
import clsx from "clsx";

import { Icon } from "components/common/icon";

import { LoaderProps } from "./types";

import styles from "./styles.module.scss";

export const Loader: FC<LoaderProps> = ({ className = "" }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <Icon name="fruit-salad-loader" />
    </div>
  );
};
