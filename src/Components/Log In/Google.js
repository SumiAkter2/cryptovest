import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { BsGoogle } from "react-icons/bs";
import auth from "../../Firebase/firebase.init";
import "./Login.css";
const Google = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div>
      <button className="login-button bg-info btn-circle">
        <BsGoogle
          size="25px"
          color="white"
          className="text-center mx-auto"
          onClick={() => signInWithGoogle()}
        />
      </button>
    </div>
  );
};

export default Google;
