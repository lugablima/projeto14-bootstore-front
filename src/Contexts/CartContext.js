import { createContext, useContext, useState, useEffect } from "react";

function getLocalCart() {
  const localUser = JSON.parse(localStorage.getItem("cart"));
  return localUser || [];
}

function updateLocalCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(getLocalCart());

  useEffect(() => {
    updateLocalCart(cart);
  }, [cart]);

  function getTotal() {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    return total;
  }

  function addProductToCart(product) {
    setCart([...cart, product]);
  }

  function removeProductFromCart(productId) {
    setCart(cart.filter((product) => product._id !== productId));
  }

  return <CartContext.Provider value={{ cart, addProductToCart, removeProductFromCart, getTotal }}>{children}</CartContext.Provider>;
}
