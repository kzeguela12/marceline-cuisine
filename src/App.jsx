import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Menu from "./Menu";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((currentCart) => {
      const existingItem = currentCart.find((cartItem) => cartItem.name === item.name);

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }

      return [...currentCart, { ...item, quantity: 1 }];
    });
  }

  function removeFromCart(itemName) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.name === itemName
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Home cartCount={cart.reduce((count, item) => count + item.quantity, 0)} />}
      />
      <Route
        path="/menu"
        element={
          <Menu
            cart={cart}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
          />
        }
      />
    </Routes>
  );
}

export default App;