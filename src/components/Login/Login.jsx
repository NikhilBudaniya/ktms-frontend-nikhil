//Dependencies
import React from "react";

//CSS
import styles from "./Login.module.css";

const Login = (props) => {
  const loginWithGoogle = (type) => {
    if (type === "vendor") {
      console.log(type)
      window.location.href =
        process.env.REACT_APP_BACKEND_URL_VENDOR + "/user/login";
    } else
      { console.log(process.env.REACT_APP_BACKEND_URL_STUDENT) ;
        window.location.href = process.env.REACT_APP_BACKEND_URL_STUDENT + "/student/login";}
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <button
          className={styles.submitBtn}
          onClick={() => loginWithGoogle("vendor")}
        >
          Login with Google as Vendor
        </button>
        <button
          className={styles.submitBtn}
          onClick={() => loginWithGoogle("student")}
        >
          Login with Google as Student
        </button>
      </div>
    </div>
  );
};
export default Login;
