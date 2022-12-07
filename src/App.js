import { Route, Routes } from "react-router-dom";
import "./App.css";
import Coins from "./Components/Coins/Coins";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/coins" element={<Coins />}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
