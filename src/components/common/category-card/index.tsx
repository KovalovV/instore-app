import { FC } from "react";
import { Link } from "react-router-dom";

import { Text } from "components/common/text";

import { routes } from "constants/routes";
import { capitalizeFirstLetter } from "utils/typography";

import { ProductCategoryProps } from "./types";

import styles from "./category-card.module.scss";

export const CategoryCard: FC<ProductCategoryProps> = ({
  name,
  backgroundImage,
}) => {
  return (
    <Link to={`${routes.products}?category=${name}`} className={styles.root}>
      <img src={backgroundImage} alt={name} />
      <Text as="h3" className={styles.name}>
        {capitalizeFirstLetter(name)}
      </Text>
    </Link>
  );
};
