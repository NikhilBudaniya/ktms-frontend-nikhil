//Dependencies
import React, { useEffect } from "react";
import axios from "axios";
import { setAuth } from "../../Store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCookies } from "react-cookie";

//CSS

const AuthNRedirectVendor = (props) => {
  const [, setCookie] = useCookies(["tokenSession"]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispach = useDispatch();

  const getUserInfo = (token) => {
    return axios
      .get(process.env.REACT_APP_BACKEND_URL_VENDOR + "/user/getuser", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    let token = searchParams.get("token");
    getUserInfo(token)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispach(
            setAuth({
              user: {
                email: response.data.user.email,
                name: response.data.user.name,
                type: "vendor",
              },
            })
          );
          console.log(token);
          setCookie("tokenSession", token);
        } else console.log(response);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  });

  return <h1>Loading</h1>;
};

export default AuthNRedirectVendor;
