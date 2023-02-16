import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { Formik, FormikProps } from "formik";

import { selectUser } from "store/user/selectors";

import { Text } from "components/common/text";
import { Button } from "components/ui/button";
import { Header } from "components/sections/header";
import { FormikInput } from "components/ui/formik/formik-input";

import { GoogleAuth } from "pages/login/components/google-auth";

import { LoginFormProps } from "./types";

import styles from "./login-form.module.scss";

export const LoginForm: FC<LoginFormProps> = ({
  fields,
  formConfig,
  formType,
  handleFormType,
}) => {
  const { isLoading } = useSelector(selectUser);

  const copyright = useMemo(
    () => ({
      primary: formType === "log-in" ? "Log In" : "Sign Up",
      secondary: formType === "log-in" ? "Sign Up" : "Log In",
    }),
    [formType],
  );

  return (
    <form className={styles.form}>
      <Header>
        <Text as="h1">{copyright.primary}</Text>
      </Header>
      <Formik validateOnBlur {...formConfig}>
        {({
          handleSubmit,
          errors,
          touched,
        }: FormikProps<typeof formConfig.initialValue>) => {
          return (
            <div>
              {fields.map((field, index: number) => (
                <FormikInput
                  key={field.name}
                  size="medium"
                  errors={errors}
                  touched={touched}
                  className={styles.field}
                  {...field}
                />
              ))}
              <GoogleAuth formType={formType} />
              <div className={styles.actions}>
                <Button
                  type="button"
                  size="medium"
                  color="orange"
                  variant="alpha"
                  disabled={isLoading}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  {copyright.primary}
                </Button>
                <Button
                  type="button"
                  size="medium"
                  disabled={isLoading}
                  onClick={handleFormType}
                >
                  {copyright.secondary}
                </Button>
              </div>
            </div>
          );
        }}
      </Formik>
    </form>
  );
};
