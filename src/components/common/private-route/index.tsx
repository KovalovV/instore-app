import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectUser } from "store/user/selectors";

import { routes } from "constants/routes";

import { PrivateRouteProps } from "./types";

export const PrivateRoute: FC<PrivateRouteProps> = ({
  children,
  path = routes.login,
}) => {
  const { isAuthenticated } = useSelector(selectUser);

  return isAuthenticated ? children : <Navigate to={path} />;
};
