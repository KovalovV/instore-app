import { useQuery } from "@tanstack/react-query";

import { ProductsRequests } from "services/products/requests";

export const usePopularProducts = () => {
  const { isLoading, data: popularProducts } = useQuery(
    ["popular product list"],
    () => ProductsRequests.getPopularProducts(),
  );

  return { isLoading, popularProducts };
};
