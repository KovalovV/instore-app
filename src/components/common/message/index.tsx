import { FC } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { Text } from "components/common/text";
import { Icon } from "components/common/icon";
import { Button } from "components/ui/button";

import { routes } from "constants/routes";

import { MessageProps } from "./types";

import styles from "./message.module.scss";

export const Message: FC<MessageProps> = ({
  icon,
  title,
  description,
  onClick,
  className = "",
  route = routes.home,
  button = "Back to Homepage",
}) => {
  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.container}>
        <Icon name={icon} />
        <Text as="h2">{title}</Text>
        <Text as="p">{description}</Text>
        <Link to={route}>
          <Button
            size="medium"
            color="black"
            variant="gray"
            fullWidth={false}
            onClick={onClick}
          >
            {button}
          </Button>
        </Link>
      </div>
    </div>
  );
};
