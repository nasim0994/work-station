import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../Redux/auth/authSlice";

export default async function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem("WorkStation_jwt");

    if (localAuth) {
      fetch("https://work-station-server.vercel.app/api/v1/user/me", {
        headers: {
          authorization: `bearer ${localAuth}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.status === "success") {
            dispatch(
              userLoggedIn({
                token: localAuth,
                loading: false,
                status: true,
                data: data?.data,
              })
            );
          }
        })
        .finally(() => {
          setAuthChecked(true);
        });
    }
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
