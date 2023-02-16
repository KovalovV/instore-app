import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Formik, FormikHelpers, FormikProps } from "formik";
import { toast } from "react-toastify";

import { useAppDispatch } from "store";
import { selectUser } from "store/user/selectors";
import { logout, updateProfile } from "store/user/thunks";

import { Header } from "components/sections/header";
import { Text } from "components/common/text";
import { Button } from "components/ui/button";
import { FormikInput } from "components/ui/formik/formik-input";

import { PROFILE_FORM_FIELDS, PROFILE_FORM_VALIDATION_SCHEMA } from "./config";

import styles from "./profile.module.scss";

export const ProfilePage = () => {
  const { userProfile } = useSelector(selectUser);
  const { id, email, name, surname } = userProfile;

  const dispatch = useAppDispatch();

  const initialValues = useMemo(
    () => ({ name, surname, email }),
    [name, surname, email],
  );

  const handleSubmit = async (
    values: typeof initialValues,
    helpers: FormikHelpers<typeof initialValues>,
  ) => {
    try {
      await dispatch(updateProfile({ id, ...values }));
      toast.success("Profile updated!");
    } catch (error) {
      toast.error("Somethig went wrong!");
    }
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      toast.success("Logout successful!");
    } catch (error) {
      toast.error("Somethig went wrong!");
    }
  };

  return (
    <div className="root-container">
      <form className={styles.form}>
        <Header className={styles.header}>
          <Text as="h1">Profile</Text>
          <Button
            variant="gray"
            color="black"
            size="medium"
            fullWidth={false}
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </Header>

        <Formik
          validateOnBlur
          validationSchema={PROFILE_FORM_VALIDATION_SCHEMA}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({
            handleSubmit,
            errors,
            touched,
          }: FormikProps<typeof initialValues>) => {
            return (
              <div>
                {PROFILE_FORM_FIELDS.map((field, index: number) => (
                  <FormikInput
                    key={field.name}
                    size="medium"
                    errors={errors}
                    touched={touched}
                    className={styles.field}
                    {...field}
                  />
                ))}
                <div className={styles.actions}>
                  <Button
                    type="button"
                    size="medium"
                    color="orange"
                    variant="alpha"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Update
                  </Button>
                </div>
              </div>
            );
          }}
        </Formik>
      </form>
    </div>
  );
};
