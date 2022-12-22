//Dependencies
import React from "react";
import { useSelector } from "react-redux";

//CSS
// import styles from "./LandingPage.module.css";

const LandingPage = (props) => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <h1>Hi! {user.name}</h1>;
    </>
  );
};

export default LandingPage;
