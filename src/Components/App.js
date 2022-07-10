import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import UserProvider from "../Contexts/UserContext";
import CartProvider from "../Contexts/CartContext";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Cart from "../Pages/Cart";
import Cards from "../Pages/Cards";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cards" element={<Cards />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
