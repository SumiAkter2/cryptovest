import React from "react";
import useCoins from "../../Hooks/useCoins";
import AllCoins from "./AllCoins";

const Coins = () => {
  const [coins] = useCoins();
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            {/* <th></th> */}
            <th className="text-sm text-info text-info">Name</th>
            <th className="text-sm text-info">Symbol</th>
            <th className="text-sm text-info">Price (Dollar) </th>
            <th className="text-sm text-info">MARKET CAP</th>
            <th className="text-sm text-info"> 24H CHANGE </th>
            <th className="text-sm text-info">24H VOLUME</th>

            <th>Action</th>
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
