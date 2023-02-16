import { FC } from "react";
import clsx from "clsx";

import { Icon } from "components/common/icon";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";

import { QuantityProps } from "./types";

import styles from "./quantity.module.scss";

export const Quantity: FC<QuantityProps> = ({
  value,
  increase,
  decrease,
  size = "small",
  className,
}) => {
  return (
    <div className={clsx(styles.root, className)}>
      <Button
        type="button"
        variant="gray"
        size={size}
        fullWidth={false}
        onClick={decrease}
      >
        <Icon name="subtract-filled" />
      </Button>
      <Input
        type="number"
        min="0"
        max="10"
        readOnly
        value={value}
        size={size}
        className={styles.input}
      />{" "}
      <Button
        type="button"
        variant="gray"
        size={size}
        fullWidth={false}
        onClick={increase}
      >
        <Icon name="add-filled" />
      </Button>
    </div>
  );
};
