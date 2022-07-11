import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import UserProvider from "../Contexts/UserContext";
import CardsProvider from "../Contexts/CardsContext";
import CartProvider from "../Contexts/CartContext";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Cart from "../Pages/Cart";
import Cards from "../Pages/Cards";
import Payment from "../Pages/Payment";
import Receipt from "../Pages/Receipt";

function App() {
  return (
    <UserProvider>
      <CardsProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/receipt" element={<Receipt />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </CardsProvider>
    </UserProvider>
  );
}

export default App;
