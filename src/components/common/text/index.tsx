import { FC, ElementType } from "react";

import { TextProps } from "./types";

export const Text = <C extends ElementType = "span">({
  as,
  children,
  ...props
}: TextProps<C>) => {
  const Component = as || "span";

  return <Component {...props}>{children}</Component>;
};
