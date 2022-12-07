import { Route, Routes } from "react-router-dom";
import "./App.css";
import Coins from "./Components/Coins/Coins";
import DetailCoin from "./Components/Coins/DetailCoin";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/coins" element={<Coins />}></Route>
          <Route path="/detail/:id" element={<DetailCoin />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
