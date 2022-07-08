import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import CartProvider from "../Contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
