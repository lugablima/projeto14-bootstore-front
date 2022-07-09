import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import UserProvider from "../Contexts/UserContext";
import CartProvider from "../Contexts/CartContext";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Store from "../Pages/Store";
import Product from "../Pages/Product";

function App() {
  return (
    <CartProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product/:productId" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </CartProvider>
  );
}

export default App;
