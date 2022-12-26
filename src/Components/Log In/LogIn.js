import React from "react";
import Google from "./Google";

const LogIn = () => {
  return (
    <div className="">
      <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-slate-500 mx-auto">
        <h1 className="text-3xl text-info text-center mt-4">Log In Please</h1>
        <div className="card-body">
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-primary">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label text-primary">
              <a
                href="#f"
                className="label-text-alt link link-hover text-primary"
              >
                Forgot password? Reset Password
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-info btn-outline">Login</button>
          </div>

          <div>
            <Google />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
