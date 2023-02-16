/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useAppDispatch } from "store";
import { setCurrentUser, setLoading } from "store/user/slices";
import { UserRequests } from "services/user/requests";

export const useAuth = () => {
  const auth = getAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authCheck = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const authUserData = await UserRequests.getUserById(user.uid);
        const data = authUserData.data();
        dispatch(
          setCurrentUser({
            id: data.id,
            name: data.name,
            surname: data.surname,
            email: data.email,
          }),
        );
      } else {
        dispatch(setLoading(false));
      }
    });

    return () => {
      authCheck();
    };
  }, [auth]);
};
