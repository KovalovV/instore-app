import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAppDispatch } from "store";
import { googleAuth } from "store/user/thunks";

import { Icon } from "components/common/icon";
import { Text } from "components/common/text";

import { routes } from "constants/routes";

import { GoogleAuthProps } from "./types";

import styles from "./google-auth.module.scss";

export const GoogleAuth: FC<GoogleAuthProps> = ({ formType }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const copyright = useMemo(
    () => (formType === "log-in" ? "Log In" : "Sign Up"),
    [formType],
  );

  const handleGoogleAuth = async () => {
    try {
      await dispatch(googleAuth());
      navigate(routes.home);
      toast.success("Login successful!");
    } catch (error) {
      toast.error("Somethig went wrong!");
    }
  };

  return (
    <div onClick={handleGoogleAuth} className={styles.root}>
      <Icon name="google" />
      <Text as="p">{copyright} with Google</Text>
    </div>
  );
};
