import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-primary lg:py-12 mb-4">
      <div className=" lg:flex justify-evenly items-center my-24 bg-accent p-12 m-12 rounded-md ">
        <div>
          <h1 className="text-3xl text-center text-primary">
            SIGN UP TO NEWSLETTER !
          </h1>
          <h1 className="mt-4 text-black">
            Receive early updates Our products info.
          </h1>
        </div>
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="Type Email"
            className="input input-bordered input-secondary w-full "
          />
          <button className="btn btn-outline btn-primary ml-3 text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
