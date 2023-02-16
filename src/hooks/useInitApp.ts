import { useEffect } from "react";
import { toast } from "react-toastify";

import { useAppDispatch } from "store";
import { getCategories } from "store/categories/thunks";

export const useInitApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      dispatch(getCategories());
    } catch (error) {
      toast.error("Somethig went wrong!");
    }
  }, []);
};
