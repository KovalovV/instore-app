import { useQuery } from "@tanstack/react-query";

import { ProductsRequests } from "services/products/requests";

export const useProductById = (id = "") => {
  const { isLoading, data: product } = useQuery(
    ["product", id],
    () => ProductsRequests.getProductById(id),
    {
      enabled: !!id,
    },
  );

  return { isLoading, product };
};
