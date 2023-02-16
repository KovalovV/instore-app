import { Icon } from "components/common/icon";

import styles from "./splash-screen.module.scss";

export const SplashScreen = () => {
  return (
    <div className={styles.root}>
      <Icon name="logo" />
    </div>
  );
};
