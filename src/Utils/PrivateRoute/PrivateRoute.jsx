import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { setAuth } from "../../Store/authSlice";
import axios from "axios";

function PrivateRoute(props) {
  const [isLoading, setIsLoading] = useState(false);
  const { isAuth } = useSelector((state) => state.user);
  const [cookies, setCookies] = useCookies(["tokenSession"]);
  const dispach = useDispatch();

  useEffect(() => {
    if (isAuth === false && cookies.tokenSession !== "") {
      setIsLoading(true);
      axios
        .get(process.env.REACT_APP_BACKEND_URL + "/user/getuser", {
          headers: {
            Authorization: cookies.tokenSession,
          },
        })
        .then((response) => {
          const user = response.data.user;
          dispach(
            setAuth({
              user: { email: user.email, name: user.name },
            })
          );
        })
        .catch((err) => {
          setCookies("tokenSession", "");
          console.log(err);
        });
      setIsLoading(false);
    }
  });

  return (
    <>
      {cookies.tokenSession !== "" ? (
        <>
          {isLoading === true && <h1> Loading</h1>}
          {isAuth === true && props.element}
        </>
      ) : (
        <Navigate to={{ pathname: "/login" }} />
      )}
    </>
  );
}

export default PrivateRoute;
