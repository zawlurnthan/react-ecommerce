import React from "react";
import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import './App.css';



function App() {
  return (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<ShopPage />} />
        </Routes>
    </div>
  );
}

export default App;
