import { FC } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch } from "store";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "store/cart/slices";

import { ICategory } from "services/categories/types";

import { Text } from "components/common/text";
import { Icon } from "components/common/icon";
import { Button } from "components/ui/button";
import { Quantity } from "components/ui/quantity";

import { capitalizeFirstLetter } from "utils/typography";

import { routes } from "constants/routes";

import { CartCardProps } from "./types";

import styles from "./cart-card.module.scss";

export const CartCard: FC<CartCardProps> = ({
  id,
  title,
  category,
  image,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };

  const handleIncrementQuantity = () => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrementQuantity = () => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div className={styles.root}>
      <Link to={`${routes.products}/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div className={styles.description}>
        <div className={styles.heading}>
          <div>
            <Text as="p" className={styles.category}>
              {(category as ICategory).name}
            </Text>
            <Text as="h3" className={styles.title}>
              {capitalizeFirstLetter(title)}
            </Text>
          </div>
          <Button
            size="small"
            variant="gray"
            fullWidth={false}
            onClick={handleRemoveItem}
          >
            <Icon name="dismiss-filled" />
          </Button>
        </div>
        <div className={styles.quantity}>
          <Quantity
            size="medium"
            value={quantity}
            increase={handleIncrementQuantity}
            decrease={handleDecrementQuantity}
          />
          <Text as="p" className={styles.price}>
            ${price}
          </Text>
        </div>
      </div>
    </div>
  );
};
