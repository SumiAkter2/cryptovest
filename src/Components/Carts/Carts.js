import React from "react";
import { Link } from "react-router-dom";
import DetailCart from "./DetailCart";
import { BsArrowRight } from "react-icons/bs";
import ReceptPage from "../ReceptPage/ReceptPage";
const Carts = ({ cart, refetch }) => {
  return (
    <div>
      <div className="px-4 lg:px-20 mt-5 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2 m-5">
            <h1 className="text-3xl lg:text-5xl font-bold text-info opacity-70 ">
              ORDER HISTORY
            </h1>
            <Link
              to="/coin"
              className="flex items-center justify-end gap-2 pr-3 text-info font-bold opacity-70 mb-2 hover:opacity-100 duration-200 ease-in"
            >
              <p>Add more coin</p>
              <BsArrowRight className="text-lg" />
            </Link>
            <div className="container shadow-2xl shadow-gray-500  relative border  rounded-xl h-[400px] overflow-y-auto ">
              <table className="table w-full ">
                {/* <!-- head --> */}
                <thead className="sticky top-0">
                  <tr className="bg-secondary text-info sticky top-0">
                    <th className="bg-secondary">Name</th>
                    <th className="bg-secondary">Price</th>
                    <th className="bg-secondary">Quantity</th>
                    <th className="bg-secondary">Total</th>
                    <th className="bg-secondary">Delete </th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.map((coin) => (
                    <DetailCart
                      key={coin.id}
                      coin={coin}
                      refetch={refetch}
                    ></DetailCart>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="m-5">
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 opacity-70 text-info">
                Receipt
              </h1>
              <div className="p-5 bg-base-100 border rounded-xl h-[420px] shadow-2xl shadow-gray-700">
                <ReceptPage cart={cart} refetch={refetch} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
