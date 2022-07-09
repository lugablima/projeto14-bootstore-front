import React from "react";

function getLocalCart() {
  const localUser = JSON.parse(localStorage.getItem("user"));
  return localUser || [];
}

function updateLocalCart(cart) {
  localStorage.setItem("user", JSON.stringify(cart));
}

const CartContext = React.createContext();

export const useCartContext = () => React.useContext(CartContext);

export default function CartProvider({ children }) {
  const [cart, setCart] = React.useState(getLocalCart());

  React.useEffect(() => {
    updateLocalCart(cart);
  }, [cart]);

  function addProductToCart(product) {
    setCart([...cart, product]);
  }

  function removeProductFromCart(productId) {
    setCart(cart.filter((product) => product._id !== productId));
  }

  return <CartContext.Provider value={{ cart, addProductToCart, removeProductFromCart }}>{children}</CartContext.Provider>;
}
