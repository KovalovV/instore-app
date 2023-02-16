import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { selectCategories } from "store/categories/selectors";

import { ProductsRequests } from "services/products/requests";

import { TProductSort, TProductSortingFields } from "services/products/types";
import { TOrderSort } from "types/common";

export const useAllProducts = ({ sort }: TProductSort) => {
  const { categories } = useSelector(selectCategories);

  const { isLoading, data: products } = useQuery(
    [
      "product list",
      { field: sort?.field, order: sort?.order, category: sort?.category },
    ],
    () =>
      ProductsRequests.getAllProducts({
        sort: {
          field: sort?.field as TProductSortingFields,
          order: sort?.order as TOrderSort,
          category: categories.find(({ name }) => name === sort?.category)?.id,
        },
      }),
    {
      enabled: !!sort?.field && !!sort?.order && !!sort?.category,
    },
  );

  return { isLoading, products };
};
