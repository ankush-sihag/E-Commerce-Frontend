import Navbar  from "./components/Navbar/Navbar";
import MenuBar from "./components/MenuBar/menuBar";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
          <Navbar />
          <MenuBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<login />} />
          </Routes>
    </>
  );
}

export default App;