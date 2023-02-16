import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { useAppDispatch } from "store";
import { addToCart } from "store/cart/slices";
import { setAuthModal } from "store/user/slices";
import { selectUser } from "store/user/selectors";
import { selectCategories } from "store/categories/selectors";

import { useProductById } from "services/products/hooks/useProductById";

import { Header } from "components/sections/header";
import { Text } from "components/common/text";
import { Loader } from "components/common/loader";
import { Button } from "components/ui/button";

import styles from "./single-product.module.scss";

export const SingleProductPage = () => {
  const dispatch = useAppDispatch();

  const { categories } = useSelector(selectCategories);
  const { isAuthenticated } = useSelector(selectUser);

  const { productId } = useParams();
  const { isLoading, product } = useProductById(productId);

  const handleAddToCart = () => {
    if (isAuthenticated) {
      dispatch(
        addToCart({
          id: product?.id,
          title: product?.title,
          category: product?.category,
          image: product?.image,
          price: product?.price,
        }),
      );
    } else {
      dispatch(setAuthModal(true));
    }
  };

  return (
    <div className="root-container">
      <div className={styles.root}>
        <Header>
          <Text as="h1">Product</Text>
        </Header>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.content}>
            <div className={styles.image}>
              <img src={product?.image} alt={product?.image} />
            </div>
            <div className={styles.info}>
              <div className={styles.info_main}>
                <div>
                  <Text as="p" className={styles.category}>
                    {
                      categories.find(({ id }) => id === product?.category.id)
                        ?.name
                    }
                  </Text>
                  <Text as="h2" className={styles.title}>
                    {product?.title}
                  </Text>
                </div>
                <Text as="h2" className={styles.price}>
                  ${product?.price}
                </Text>
              </div>
              <div className={styles.buy}>
                <Text as="h2" className={styles.popularity}>
                  <Text as="p">Popularity:</Text> {product?.popularity}
                  <Text>/5</Text>
                </Text>

                <Button
                  size="medium"
                  variant="alpha"
                  color="orange"
                  fullWidth={false}
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Button>
              </div>
              <div className={styles.description}>
                <Text as="h2">Description</Text>
                <Text as="p">{product?.description}</Text>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
