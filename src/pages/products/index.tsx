import { ChangeEvent } from "react";
import { useQueryParams, StringParam, withDefault } from "use-query-params";

import { TOrderSort } from "types/common";

import { useAllProducts } from "services/products/hooks/useAllProducts";
import { TProductSortingFields } from "services/products/types";

import { Header } from "components/sections/header";
import { Text } from "components/common/text";
import { Card } from "components/common/card";
import { Loader } from "components/common/loader";
import { ProductCard } from "components/common/product-card";
import { RadioButton } from "components/ui/radio-button";
import { RadioButtonGroup } from "components/ui/radio-button-group";

import { sortRadioGroup, categoryRadioGroup } from "./config";

import styles from "./products.module.scss";

// default values for query params
const categoryDefault = withDefault(StringParam, "all");
const orderDefault = withDefault(StringParam, "desc");
const fieldDefault = withDefault(StringParam, "popularity");

export const ProductsPage = () => {
  const [query, setQuery] = useQueryParams({
    field: fieldDefault,
    order: orderDefault,
    category: categoryDefault,
  });

  const { isLoading, products } = useAllProducts({
    sort: {
      field: query.field as TProductSortingFields,
      order: query.order as TOrderSort,
      category: query.category,
    },
  });

  const handleSort = (e: ChangeEvent<HTMLInputElement>) => {
    const [field, order] = e.target.value.split("-");
    setQuery({ ...query, field, order }, "push");
  };

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const category = e.target.value;
    setQuery({ ...query, category }, "push");
  };

  return (
    <div className="root-container">
      <div className={styles.root}>
        <Header>
          <Text as="h1">Products</Text>
        </Header>

        <div className={styles.wrapper}>
          <Card padding="md" className={styles.options}>
            <RadioButtonGroup label="Sorting by:">
              {sortRadioGroup.map((radio) => (
                <RadioButton
                  key={radio.label}
                  checked={`${query.field}-${query.order}` === radio.value}
                  {...radio}
                  onChange={handleSort}
                />
              ))}
            </RadioButtonGroup>

            <RadioButtonGroup label="Categories:" className={styles.categories}>
              {categoryRadioGroup.map((radio) => (
                <RadioButton
                  key={radio.label}
                  checked={query.category === radio.value}
                  {...radio}
                  onChange={handleFilter}
                />
              ))}
            </RadioButtonGroup>
          </Card>

          {isLoading ? (
            <Loader />
          ) : (
            <div className={styles.products}>
              {products?.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
