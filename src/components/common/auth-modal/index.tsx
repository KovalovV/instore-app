import { useEffect } from "react";

import { useAppDispatch } from "store";
import { setAuthModal } from "store/user/slices";

import { Message } from "components/common/message";

import { disableBgScroll } from "utils/disable-bg-scroll";
import { routes } from "constants/routes";

import styles from "./auth-modal.module.scss";

export const AuthModal = () => {
  const dispatch = useAppDispatch();

  const close = () => {
    dispatch(setAuthModal(false));
    disableBgScroll(true);
  };

  useEffect(() => {
    disableBgScroll(false);
  }, []);

  return (
    <>
      <div className={styles.background} onClick={close} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <Message
            title="Purchase stopped"
            description="It looks like you are not authorized. Do it and continue shopping"
            icon="dismiss-filled"
            route={routes.login}
            button="Login"
            onClick={close}
          />
        </div>
      </div>
    </>
  );
};
