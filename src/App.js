import { useState } from "react";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import "./App.css";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    if (!product.quantity) {
      product.quantity = 1;
    } else {
      product.quantity++;
    }
    console.log(product);
    setTotalPrice(totalPrice + product.price);
    setCartItems([
      ...cartItems.filter((item) => item.id !== product.id),
      product,
    ]);
  }

  function discardItem(product) {
    setCartItems([...cartItems.filter((item) => item.id !== product.id)]);
    setTotalPrice(totalPrice - product.price * product.quantity);
    product.quantity = 0;
  }

  return (
    <div className="App">
      <ShoppingCart
        totalPrice={totalPrice}
        cartItems={cartItems}
        discardItem={discardItem}
      />
      <Products addToCart={addToCart} />
    </div>
  );
}

export default App;
