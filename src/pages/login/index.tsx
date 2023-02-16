/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormikHelpers } from "formik";
import clsx from "clsx";

import { useAppDispatch } from "store";
import { login, register } from "store/user/thunks";

import { ILogin, IRegister } from "services/user/types";
import { routes } from "constants/routes";

import { LoginForm } from "./components/login-form";

import { TFormType } from "./types";

import {
  SIGN_IN_FORM_FIELDS,
  SIGN_IN_FORM_INITIAL_VALUES,
  SIGN_IN_FORM_VALIDATION_SCHEMA,
  SIGN_UP_FORM_FIELDS,
  SIGN_UP_FORM_INITIAL_VALUES,
  SIGN_UP_FORM_VALIDATION_SCHEMA,
  TSignInFormValues,
  TSignUpFormValues,
} from "./config";

import styles from "./login.module.scss";

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formType, setFormType] = useState<TFormType>("log-in");

  const formConfig = useMemo(
    () =>
      formType === "log-in"
        ? {
            validationSchema: SIGN_IN_FORM_VALIDATION_SCHEMA,
            initialValues: SIGN_IN_FORM_INITIAL_VALUES,
            onSubmit: async (
              values: ILogin,
              helpers: FormikHelpers<TSignInFormValues>,
            ) => {
              try {
                await dispatch(login(values));
                navigate(routes.home);
                toast.success("Login successful!");
              } catch (error) {
                toast.error("Somethig went wrong!");
              }
            },
          }
        : {
            validationSchema: SIGN_UP_FORM_VALIDATION_SCHEMA,
            initialValues: SIGN_UP_FORM_INITIAL_VALUES,
            onSubmit: async (
              values: IRegister,
              helpers: FormikHelpers<TSignUpFormValues>,
            ) => {
              try {
                await dispatch(
                  register({ email: values.email, password: values.password }),
                );
                navigate(routes.home);
                toast.success("Register successful!");
              } catch (error) {
                toast.error("Somethig went wrong!");
              }
            },
          },
    [formType],
  );

  const fields = useMemo(
    () => (formType === "log-in" ? SIGN_IN_FORM_FIELDS : SIGN_UP_FORM_FIELDS),
    [formType],
  );

  const handleFormType = () => {
    setFormType((prevFormType) =>
      prevFormType === "sign-up" ? "log-in" : "sign-up",
    );
  };

  return (
    <div className={clsx("root-container", styles.root)}>
      <LoginForm
        fields={fields}
        formType={formType}
        formConfig={formConfig}
        handleFormType={handleFormType}
      />
    </div>
  );
};
