import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../Firebase/firebase.init";

const Reset = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const actionCodeSettings = {
    url: "http://localhost:3000/reset",
  };
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    sendPasswordResetEmail(data.email, actionCodeSettings);
    swal({
      icon: "success",
      text: "Send password.Please check your phone",
    });
    navigate("/");

    console.log(data);
  };
  return (
    <div>
      <div className=" signup-bg ">
        <div className="  mx-auto  content-bg py-12">
          <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl  mx-auto bg-slate-300 rounded-2xl">
            <h1 className="text-3xl text-info text-center mt-4">Reset</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Give valid email(like: abc@abc.com) ",
                    },
                  })}
                  type="text"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                />
                {errors.email?.type === "required" && (
                  <span className=" text-error">{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className=" text-error">{errors.email.message}</span>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-info btn-outline" type="submit">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
