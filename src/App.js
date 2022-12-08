import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Carts from "./Components/Carts/Carts";
import Coins from "./Components/Coins/Coins";
import DetailCoin from "./Components/Coins/DetailCoin";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Loading from "./Components/Loading/Loading";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import useCart from "./Hooks/useCart";
import useCoins from "./Hooks/useCoins";
import { addToLocalStorage } from "./utilities/LocalStorageDB";

export const CartContext = createContext("");

function App() {
  const [coin, isLoading] = useCoins();
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
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <CartContext.Provider value={addToCart}>
      <div className="App">
        <Navbar cart={cart}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/coin" element={<Coins />}></Route>
            <Route path="/detail/:id" element={<DetailCoin />}></Route>
            <Route path="/carts" element={<Carts cart={cart} />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </Navbar>
      </div>
    </CartContext.Provider>
  );
}

export default App;
