import React from "react";

import { Logo } from "./icons/logo";
import { Google } from "./icons/google";
import { AddFilled } from "./icons/add-filled";
import { CartRegular } from "./icons/cart-regular";
import { DismissFilled } from "./icons/dismiss-filled";
import { SubtractFilled } from "./icons/subtract-filled";
import { ArrowLeftFilled } from "./icons/arrow-left-filled";
import { FruitSaladLoader } from "./icons/fruit-salad-loader";

export const Icon = ({
  id,
  name,
  className,
  ...props
}: {
  id?: string;
  name: string;
  width?: number;
  height?: number;
  stroke?: string;
  className?: string;
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "arrow-left-filled":
        return <ArrowLeftFilled />;
      case "add-filled":
        return <AddFilled />;
      case "subtract-filled":
        return <SubtractFilled />;
      case "dismiss-filled":
        return <DismissFilled />;

      case "cart-regular":
        return <CartRegular />;

      case "google":
        return <Google />;
      case "logo":
        return <Logo />;
      case "fruit-salad-loader":
        return <FruitSaladLoader />;

      default:
        return <span />;
    }
  };

  return React.cloneElement(getIcon(name), {
    id,
    className,
    ...props,
  });
};
