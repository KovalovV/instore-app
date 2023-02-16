import { FC } from "react";
import clsx from "clsx";

import { Text } from "components/common/text";

import { BannerProps } from "./types";

import styles from "./banner.module.scss";

export const Banner: FC<BannerProps> = ({
  image,
  title,
  sale,
  className = "",
}) => {
  return (
    <div className={clsx(styles.root, className)}>
      <img src={image} alt={title} />
      <div className={styles.proposal}>
        <Text as="h2">{title}</Text>
        <Text as="h1">{sale}% off</Text>
      </div>
    </div>
  );
};
