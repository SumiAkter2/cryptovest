import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import "./Login.css";
const Google = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const googleLogin = () => {
    signInWithGoogle();
    navigate("/");
  };
  return (
    <div>
      <button className="login-button bg-info btn-circle">
        <BsGoogle
          size="25px"
          color="white"
          className="text-center mx-auto"
          onClick={googleLogin}
        />
      </button>
    </div>
  );
};

export default Google;
