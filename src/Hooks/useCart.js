import { useEffect, useState } from "react";
import { getStorageItem } from "../utilities/LocalStorageDB";

const useCart = (coins) => {
  const [cart, setCart] = useState(0);
  useEffect(() => {
    const storageCoin = getStorageItem();
    const addNewCart = [];
    for (const id in storageCoin) {
      const addedCoin = coins?.find((coin) => coin.id === id);
      if (addedCoin) {
        addedCoin.quantity = storageCoin[id];
        addNewCart.push(addedCoin);
      }
    }
    setCart(addNewCart);
  }, [coins]);
  return [cart, setCart];
};
export default useCart;
