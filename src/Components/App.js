import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import UserProvider from "../Contexts/UserContext";
import CardsProvider from "../Contexts/CardsContext";
import CartProvider from "../Contexts/CartContext";
import Store from "../Pages/Store";
import Product from "../Pages/Product";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Cart from "../Pages/Cart";
import Cards from "../Pages/Cards";
import Payment from "../Pages/Payment";
import Receipt from "../Pages/Receipt";
import Profile from "../Pages/Profile";

function App() {
  return (
    <UserProvider>
      <CardsProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Store />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/receipt" element={<Receipt />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </CardsProvider>
    </UserProvider>
  );
}

export default App;
