import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/firebase.init";
import Google from "./Google";

const LogIn = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
    console.log(data);
    console.log(error);
  };

  return (
    <div className=" lg:w-96 mb-6 ">
      <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl  mx-auto bg-slate-300 rounded-2xl">
        <h1 className="text-3xl text-info text-center mt-4">Log In</h1>
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
              placeholder="Email"
              className="input input-bordered"
            />
            {errors.email?.type === "required" && (
              <span className=" text-error">{errors.email.message}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className=" text-error">{errors.email.message}</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Password</span>
            </label>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                maxLength: {
                  value: 6,
                  message: " Give Maximum 6 value ",
                },
              })}
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password?.type === "required" && (
              <span className=" text-error">{errors.password.message}</span>
            )}
            {errors.password?.type === "maxLength" && (
              <span className=" text-error">{errors.password.message}</span>
            )}
            <label className="label ">
              <a
                href="#f"
                className="label-text-alt link link-hover text-black"
              >
                Forgot password? Reset Password
              </a>
            </label>
            <label className="label ">
              <a
                href="#f"
                className="label-text-alt link link-hover text-black"
              >
                Forgot password? Reset Password
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-info btn-outline"
              type="submit"
              // onClick={() => createUserWithEmailAndPassword()}
            >
              Log In
            </button>
          </div>
          <div className="divider">Or</div>
          <div className="mx-auto ">
            <Google />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
