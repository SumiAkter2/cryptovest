import React from "react";

const ReceptPage = ({ cart, refetch }) => {
  return (
    <div>
      <h1 className="text-xl flex justify-between">
        <span> Quantity: </span> <span className="font-bold">9</span>
      </h1>
      <h1 className="text-xl flex justify-between">
        <span> Total Price:</span> <span className="font-bold">$45555.8</span>
      </h1>
    </div>
  );
};

export default ReceptPage;
