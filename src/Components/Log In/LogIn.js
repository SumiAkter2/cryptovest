import React from "react";
import { useForm } from "react-hook-form";
import Google from "./Google";

const LogIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="">
      <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl  mx-auto">
        <h1 className="text-3xl text-info text-center mt-4">Sign Up Please</h1>
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
                  value:6,
                  message: "Max value 6",
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-info btn-outline" type="submit">
              Sign Up
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
