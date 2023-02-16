import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Card } from "components/common/card";
import { Icon } from "components/common/icon";
import { Text } from "components/common/text";
import { Button } from "components/ui/button";

import { HeaderProps } from "./types";

import styles from "./header.module.scss";

export const Header: FC<HeaderProps> = ({ className, children }) => {
  const navigate = useNavigate();

  return (
    <Card padding="lg" className={styles.root}>
      <Button
        type="button"
        size="medium"
        variant="gray"
        fullWidth={false}
        onClick={() => {
          navigate(-1);
        }}
      >
        <Icon name="arrow-left-filled" />
      </Button>
      <div className={className}>{children}</div>
    </Card>
  );
};
