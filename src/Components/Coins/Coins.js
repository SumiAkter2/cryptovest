import React from "react";
import useCoins from "../../Hooks/useCoins";
import AllCoins from "./AllCoins";

const Coins = () => {
  const [coins] = useCoins();
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-start">
        {/* <h2 className="text-2xl text-info my-12 lg:mx-12 mx-2">All Coins</h2> */}
        <form action="" className="my-12 mx-6">
          <input
            className="input-info p-2 input  rounded-md mr-2 "
            type="text"
            name="text"
            placeholder="Search"
          />
          <button className="btn btn-info  " type="submit">
            Enter
          </button>
        </form>
      </div>
      <table className="table table-zebra w-full mx-2">
        <thead>
          <tr>
            {/* <th></th> */}
            <th className="text-sm text-info ">Name</th>
            <th className="text-sm text-info">Symbol</th>
            <th className="text-sm text-info">Price (Dollar) </th>
            <th className="text-sm text-info">MARKET CAP</th>
            <th className="text-sm text-info"> 24H CHANGE </th>
            <th className="text-sm text-info">24H VOLUME</th>
            <th className="text-sm text-info">Details</th>
            <th className="text-sm text-info">Action</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <AllCoins coin={coin} key={coin.id} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Coins;
