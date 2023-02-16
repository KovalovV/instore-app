import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useAppDispatch } from "store";
import { addToCart } from "store/cart/slices";
import { setAuthModal } from "store/user/slices";
import { selectUser } from "store/user/selectors";

import { ICategory } from "services/categories/types";

import { Text } from "components/common/text";
import { Icon } from "components/common/icon";
import { Button } from "components/ui/button";

import { capitalizeFirstLetter } from "utils/typography";

import { routes } from "constants/routes";

import { ProductCardProps } from "./types";

import styles from "./product-card.module.scss";

export const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  category,
  image,
  price,
}) => {
  const dispatch = useAppDispatch();

  const { isAuthenticated } = useSelector(selectUser);

  const handleAddToCart = () => {
    if (isAuthenticated) {
      dispatch(addToCart({ id, title, category, image, price }));
    } else {
      dispatch(setAuthModal(true));
    }
  };

  return (
    <figure className={styles.root}>
      <Link to={`${routes.products}/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <figcaption className={styles.description}>
        <div>
          <Text as="p" className={styles.category}>
            {(category as ICategory).name}
          </Text>
          <Text as="h3" className={styles.title}>
            {capitalizeFirstLetter(title)}
          </Text>
          <Text as="p" className={styles.price}>
            ${price}
          </Text>
        </div>
        <Button
          size="medium"
          variant="alpha"
          fullWidth={false}
          onClick={handleAddToCart}
        >
          <Icon name="add-filled" />
        </Button>
      </figcaption>
    </figure>
  );
};
