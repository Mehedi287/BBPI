import React from "react";

import { useNavigate } from "react-router-dom";

import { unstable_HistoryRouter, useLocation } from "react-router-dom";
import UseFirebase from "../../Hook/UseFirebase";

const Login = () => {
  const navigate = useNavigate();

  const { signInWithGoogle } = UseFirebase();
  const loginWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/classRoutines");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="text-primary">login with Google </h1>
      <h1 className="text-primary">login with Google </h1>
      <button onClick={loginWithGoogle} className="btn btn-primary">
        button
      </button>
    </div>
  );
};

export default Login;
