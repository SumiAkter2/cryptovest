import React from "react";
import { GiWallet } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import CountUp from "react-countup";
import "./Success.css";
const Success = () => {
  return (
    <div>
      <div className="hero min-h-screen success-content ">
        <div className="mx-6 text-white ">
          <div className=" opacity-50 "></div>
          <div className="text-center success">
            <h1 className="mb-12 lg:text-3xl text-5xl font-bold text-white">
              Our Success
            </h1>
            <p className="my-8 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              pariatur recusandae numquam nisi quis iure accusamus, laborum
              dicta voluptatem distinctio porro quam saepe sint ipsam ad id
              quibusdam voluptate qui!
            </p>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 ">
              <div className="mb-6">
                <h1 className="text-5xl font-bold  flex justify-center items-center">
                  <GiWallet color="yellow" className="mr-2 " />
                  <CountUp delay={2} duration={1.75} start={0} end={10} />K
                </h1>
                <span className="text-sm font-bold">WALLET USERS</span>
              </div>
              <div className="mb-6">
                <h1 className="text-5xl font-bold  flex justify-center items-center">
                  <BsFillPersonFill color="yellow" className="mr-2 " />
                  <CountUp delay={2} duration={1.75} start={0} end={80} />K
                </h1>
                <span className="text-sm font-bold">ONLINE CONSULTANTS</span>
              </div>
              <div className="mb-6">
                <h1 className="text-5xl font-bold  flex justify-center items-center">
                  <BiTransfer color="yellow" className="mr-2 " />
                  <CountUp delay={2} duration={1.75} start={0} end={30} />
                </h1>
                <span className="text-sm font-bold">DAILY TRANSACTIONS</span>
              </div>
              <div className="">
                <h1 className="text-5xl font-bold  flex justify-center items-center">
                  <AiFillDollarCircle color="yellow" className="mr-2 " />
                  <CountUp delay={2} duration={1.75} start={0} end={210} />
                </h1>
                <span className="text-sm font-bold">TOTAL TRANSACTIONS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
