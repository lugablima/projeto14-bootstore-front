import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addProductToCart(product) {
    setCart([...cart, product]);
  }

  function removeProducFromCart(productId) {
    setCart(cart.filter((product) => product._id !== productId));
  }

  return <CartContext.Provider value={{ cart, addProductToCart, removeProducFromCart }}>{children}</CartContext.Provider>;
}
