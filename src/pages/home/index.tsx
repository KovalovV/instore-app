import { useSelector } from "react-redux";

import { selectCategories } from "store/categories/selectors";

import { usePopularProducts } from "services/products/hooks/usePopularProducts";

import { Banner } from "components/sections/banner";
import { Text } from "components/common/text";
import { Loader } from "components/common/loader";
import { ProductCard } from "components/common/product-card";
import { CategoryCard } from "components/common/category-card";

import proposalBannerImg from "assets/banners/right-sofa.png";

import styles from "./home.module.scss";

export const HomePage = () => {
  const { categories } = useSelector(selectCategories);

  const { isLoading, popularProducts } = usePopularProducts();

  return (
    <div className="root-container">
      <div className={styles.root}>
        <Banner image={proposalBannerImg} title="High quality sofa" sale={30} />

        <div className={styles.wrapper}>
          <Text as="h2">Categories</Text>
          <div className={styles.categories}>
            {categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>

        <div className={styles.wrapper}>
          <Text as="h2">Popular products</Text>
          <div className={styles.products}>
            {isLoading ? (
              <Loader />
            ) : (
              popularProducts?.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
