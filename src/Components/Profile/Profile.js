import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { AiOutlineRollback } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import userImage from "../../img/user.jpg";
import swal from "sweetalert";
const Profile = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const navigate = useNavigate();
  return (
    <div>
      <div className="card lg:w-96 bg-primary my-6 mx-auto shadow-xl">
        <figure className="px-10 pt-10">
          {user ? (
            <>
              <img src={user.photoURL} alt="profile-img" />
            </>
          ) : (
            <img src={userImage} alt="profile-img" />
          )}
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            Name: {user?.displayName ? user?.displayName : "Not Available"}
          </h2>
          <p>
            <span className="font-bold">Email:</span> {user?.email}
          </p>
          <div className="card-actions flex justify-center items-center mt-6">
            <button className="btn btn-secondary" onClick={() => navigate("/")}>
              <AiOutlineRollback />
              <span className="ml-4"> Back Home</span>
            </button>
            <button
              className="btn btn-secondary  "
              onClick={async () => {
                const success = await signOut();
                if (success) {
                  swal({
                    icon: "success",
                    text: "You are Sign Out Now",
                  });
                }
                navigate("/");
              }}
            >
              <RiLogoutCircleRLine /> <span className="ml-4">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
