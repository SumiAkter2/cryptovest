import React from "react";
import swal from "sweetalert";
import { TiDeleteOutline } from "react-icons/ti";
import {
  removeItem,
  minusItem,
  addToLocalStorage,
} from "../../utilities/LocalStorageDB";

const DetailCart = ({ coin, refetch }) => {
  const total = coin.current_price * coin.quantity;

  const MinusItem = () => {
    minusItem(coin.id);
    swal({ icon: "warning", text: " One quantity is decrease !" });

    refetch();
  };
  const AddItem = () => {
    addToLocalStorage(coin.id);
    swal({ icon: "success", text: " Successfully added item." });

    refetch();
  };
  const handleRemove = () => {
    swal({
      title: "Are you sure to delete?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        removeItem(coin.id);

        swal("Poof! Your item has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your item is safe!");
      }
    });
    refetch();
  };

  return (
    <tr className="hover ">
      <td className="text-left">
        <div className="flex items-center gap-3">
          <img className="h-6 w-6" src={coin.image} alt="coin-img" />
          {coin.name}
        </div>
      </td>
      <td>${coin.current_price?.toFixed(2)}</td>
      <td>
        <div className="flex">
          <button onClick={MinusItem} className="text-4xl hover:text-primary">
            -
          </button>
          <p className="border px-4 py-1 rounded-md mx-3 mt-1">
            {coin.quantity}
          </p>
          <button onClick={AddItem} className="text-3xl hover:text-primary">
            +
          </button>
        </div>
      </td>
      <td className="font-semibold">${total.toFixed(2)}</td>
      <td>
        <button
          className="opacity-50 hover:opacity-100 hover:text-red-500 duration-300 ease-in"
          onClick={handleRemove}
        >
          <TiDeleteOutline className="text-4xl" />
        </button>
      </td>
    </tr>
  );
};

export default DetailCart;
