import React from "react";
import { GiWallet } from "react-icons/gi";
import "./Success.css";
const Success = () => {
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url("https://i.ibb.co/5jD6k9f/Types-of-Cryptocurrency.jpg")`,
        }}
      >
        <div className="mx-6  text-white ">
          <div className=" opacity-50  "></div>
          <div className="text-center">
            <h1 className="mb-12 text-5xl font-bold text-white">Our Success</h1>
            <p className="my-8 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              pariatur recusandae numquam nisi quis iure accusamus, laborum
              dicta voluptatem distinctio porro quam saepe sint ipsam ad id
              quibusdam voluptate qui!
            </p>

            <div className="grid lg:grid-cols-4 md:grid-cols-2">
              <div>
                <h1 className="text-5xl font-bold  flex justify-center items-center">
                  <GiWallet color="yellow" className="mr-2 " /> 10K
                </h1>
                <span className="text-sm font-bold">WALLET USERS</span>
              </div>
            </div>
            <button
              type="submit"
              className="btn bg-white btn-info  btn-outline my-3 duration-300 ease-in  mt-12 lg:ml-12 "
            >
              fgggg
              {/* <SiConvertio className="mr-2" /> Convert */}
            </button>
            {/* </form> */}
            <h1 className="text-3xl  mt-4">
              {/* {amount ? amount : "0 "} */}
              {/* <span className="text-xl "> {to} </span> */}
            </h1>
          </div>
        </div>
      </div>
    </div>
    // "url('https://i.ibb.co/5jD6k9f/Types-of-Cryptocurrency.jpg')",backgroundSize:'cover'
  );
};

export default Success;
