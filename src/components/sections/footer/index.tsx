import { Text } from "components/common/text";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <Text>© Instore {new Date().getFullYear()}</Text>
    </footer>
  );
};
