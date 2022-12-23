import React from "react";
import swal from "sweetalert";
import { deleteCart, removeItem } from "../../utilities/LocalStorageDB";

const ReceptPage = ({ cart, refetch }) => {
  let quantity = 0;
  let total = 0;
  cart.forEach((coin) => {
    quantity = quantity + coin.quantity;
    total = total + coin.current_price * coin.quantity;
  });

  let tax = total * 0.02;
  const otherCharge = total * 0.03;
  const subtotal = total + tax + otherCharge;
  const Discount = total * 0.05;
  const grandTotal = subtotal - Discount;
  const handleDelete = () => {
    swal({
      title: "Are you sure to delete all?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteCart();

        swal("All item has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your item is safe!");
      }
    });
    refetch();
  };

  return (
    <div>
      <h1 className="text-xl flex justify-between mb-6 text-info">
        <span> Quantity: </span> <span className="font-bold">{quantity}</span>
      </h1>
      <h1 className="text-xl flex justify-between">
        <span> Total Price:</span>
        <span className="font-bold">$ {total.toFixed(2)}</span>
      </h1>

      <h1 className="text-xl flex justify-between">
        <span> Others Charge(3%) :</span>
        <span className="font-bold">${otherCharge.toFixed(2)} </span>
      </h1>
      <h1 className="text-xl flex justify-between">
        <span> Tax(2%):</span>{" "}
        <span className="font-bold">${tax.toFixed(2)}</span>
      </h1>
      <div className="border-b-4 border-info opacity-30"></div>
      <h1 className="text-xl flex justify-between mt-2">
        <span> Sub Total:</span>
        <span className="font-bold">${subtotal.toFixed(2)}</span>
      </h1>
      <h1 className="text-xl flex justify-between">
        <span> Discount(5%):</span>
        <span className="font-bold">${Discount.toFixed(2)}</span>
      </h1>
      <div className="border-b-4 border-info opacity-30"></div>
      <h1 className="text-xl flex justify-between mt-2 text-info">
        <span> Grand Total:</span>
        <span className="font-bold">${grandTotal.toFixed(2)}</span>
      </h1>
      <div className="text-xl flex justify-between mt-8 text-info">
        <button className="btn btn-info btn-outline my-3 duration-300 ease-in ">
          PROCEED TO PAY
        </button>
        <button
          className="btn btn-info btn-outline my-3 duration-300 ease-in "
          onClick={handleDelete}
        >
          DELETE CART
        </button>
      </div>
    </div>
  );
};

export default ReceptPage;
