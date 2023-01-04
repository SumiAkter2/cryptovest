import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";

const Profile = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1>{user?.email}</h1>
      <h1>{user?.displayName}...............</h1>
      <h1>dfggggggggggggggggh</h1>
    </div>
  );
};

export default Profile;
