import { createContext, useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Carts from "./Components/Carts/Carts";
import Coin from "./Components/Coins/Coin";
import DetailCoin from "./Components/Coins/DetailCoin";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Loading from "./Components/Loading/Loading";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import useCart from "./Hooks/useCart";
import useCoins from "./Hooks/useCoins";
import { addToLocalStorage } from "./utilities/LocalStorageDB";
import swal from "sweetalert";

export const CartContext = createContext("");

function App() {
  const [coin, isLoading, refetch] = useCoins();
  const [cart, setCart] = useCart(coin);
  let newCart = [];
  const addToCart = (selectedCoin) => {
    // console.log(selectedCoin)
    const exist = cart.find((coin) => coin.id === selectedCoin.id);
    if (exist) {
      const rest = cart.filter((coin) => coin.id !== selectedCoin.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    } else {
      selectedCoin.quantity = 1;
      newCart = [...cart, selectedCoin];
    }
    setCart(newCart);
    addToLocalStorage(selectedCoin.id);
    refetch();

    swal({
      icon: "success",
      text: "Added Successfully",
    });
  };
  if (isLoading) {
    return <Loading />;
  }

  <script>AOS.init();</script>;

  return (
    <CartContext.Provider value={addToCart}>
      <div className="App bg-primary">
        <Navbar cart={cart}>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/coin" element={<Coin />}></Route>

            <Route path="/detail/:id" element={<DetailCoin />}></Route>
            <Route
              path="/carts"
              element={<Carts cart={cart} refetch={refetch} />}
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </Navbar>
      </div>
    </CartContext.Provider>
  );
}

export default App;
