import React from "react";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import Teams from "./Teams";
const About = () => {
  return (
    <div>
      <section className="card lg:card-side lg:h-96 bg-base-100 shadow-xl my-6 mx-12 ">
        <figure className="mx-6">
          <img
            className="lg:w-full w-96 rounded-lg mt-6"
            src="https://i.ibb.co/VSV2LRQ/bitcoin-2007769-480.jpg"
            alt="coin-img"
          />
        </figure>
        <div className="card-body">
          <h1 className="lg:text-5xl text-3xl  font-bold px-12  pt-12 pb-6">
            WelCome To CryptoVest.
          </h1>
          <p className=" font-bold px-12 mt-6">
            Top cryptocurrency prices and charts, listed by market
            capitalization. Free access to current and historic data for Bitcoin
            and thousands of altcoins.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </section>
     

      {/* second Part */}
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url("https://i.ibb.co/LhSF4Bt/MIT-Vault-Cryptocurrency.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center ">
          <div className="max-w-full">
            {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
            <p className="mb-12 lg:text-xl font-bold text-primary">
              A cryptocurrency is a digital currency, which is an alternative
              form of payment created using encryption algorithms.
            </p>
            {/* card -1 */}
            <div className="lg:flex justify-center gap-4 text-gray-800">
              <div className="bg-primary shadow-2xl p-8 rounded-sm hover:bg-gray-500 mb-5 text-yellow-500">
                <h1>
                  <MdOutlinePayments
                    size="50px"
                    className="text-white text-center bg-yellow-500 p-2 rounded-md mx-auto mb-6 hover:bg-yellow-600 "
                  />
                </h1>
                <h1 className="text-xl font-semibold mb-4">PAYMENT ANYWHERE</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  nostrum, numquam ipsam quaerat natus odio eveniet dicta
                  delectus architecto consequatur rem doloremque et, fugiat nemo
                  velit voluptatum dolores explicabo ullam!
                </p>
              </div>
              {/* card-2 */}
              <div className=" shadow-2xl p-8 rounded-sm bg-yellow-500 hover:bg-yellow-300 mb-5 ">
                <h1>
                  <BsFillShieldLockFill
                    size="50px"
                    className="text-yellow-500 text-center bg-white p-2 rounded-md mx-auto mb-6 "
                  />
                </h1>
                <h1 className="text-xl font-semibold mb-4">VERIFY ACCOUNT</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  nostrum, numquam ipsam quaerat natus odio eveniet dicta
                  delectus architecto consequatur rem doloremque et, fugiat nemo
                  velit voluptatum dolores explicabo ullam!
                </p>
              </div>
              {/* card-3 */}
              <div className="bg-primary shadow-2xl p-8 rounded-sm hover:bg-gray-500 mb-5 text-yellow-500">
                <h1>
                  <RiMoneyDollarBoxFill
                    size="50px"
                    className="text-white text-center bg-yellow-500 p-2 rounded-md mx-auto mb-6 hover:bg-yellow-600 "
                  />
                </h1>
                <h1 className="text-xl font-semibold mb-4">
                  SAFELY TRANSACTION
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  nostrum, numquam ipsam quaerat natus odio eveniet dicta
                  delectus architecto consequatur rem doloremque et, fugiat nemo
                  velit voluptatum dolores explicabo ullam!
                </p>
              </div>
            </div>
            <button className="btn btn-primary mt-6">Get Started</button>
          </div>
        </div>
      </div>
      {/* third part */}
      {/* <Teams /> */}
    </div>
  );
};

export default About;
