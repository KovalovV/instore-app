import { useSelector } from "react-redux";

import { selectCart } from "store/cart/selectors";

import { Header } from "components/sections/header";
import { Text } from "components/common/text";
import { CartCard } from "components/common/cart-card";
import { Message } from "components/common/message";
import { Button } from "components/ui/button";

import styles from "./cart.module.scss";

export const CartPage = () => {
  const { cart, totalPrice, totalQuantity } = useSelector(selectCart);

  return (
    <div className="root-container">
      <div className={styles.root}>
        <Header>
          <Text as="h1">Shopping Cart</Text>
        </Header>

        <div className={styles.information}>
          <div className={styles.products}>
            {cart.length ? (
              cart.map((product) => <CartCard key={product.id} {...product} />)
            ) : (
              <Message
                title="Cart is Empty"
                description="Looks like you haven’t added anything to your cart yet"
                icon="cart-regular"
              />
            )}
          </div>

          <div className={styles.summary}>
            <Text as="h2">Summary</Text>
            <div className={styles.row}>
              <Text>Total quantity:</Text>
              <Text as="p">{totalQuantity}</Text>
            </div>
            <div className={styles.row}>
              <Text>Total price:</Text>
              <Text as="p">${totalPrice}</Text>
            </div>
            <Button
              size="medium"
              variant="alpha"
              color="orange"
              disabled={!totalQuantity}
            >
              Purchase
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
