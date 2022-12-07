import { Route, Routes } from "react-router-dom";
import "./App.css";
import Coins from "./Components/Coins/Coins";
import DetailCoin from "./Components/Coins/DetailCoin";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/coins" element={<Coins />}></Route>
          <Route path="/detail/:id" element={<DetailCoin />}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
