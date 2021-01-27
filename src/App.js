import { useState } from "react";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import "./App.css";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartDisplay, setCartDisplay] = useState("none");

  function addToCart(product) {
    if (!product.quantity) {
      product.quantity = 1;
    } else {
      product.quantity++;
    }
    setTotalPrice(((100 * totalPrice + 100 * product.price) / 100).toFixed(2));
    setCartItems([
      ...cartItems.filter((item) => item.id !== product.id),
      product,
    ]);
  }

  function discardItem(product) {
    setTotalPrice(
      (
        (100 * totalPrice - 100 * product.price * product.quantity) /
        100
      ).toFixed(2)
    );
    setCartItems([...cartItems.filter((item) => item.id !== product.id)]);
    product.quantity = 0;
  }

  function incrementQuantity(product) {
    product.quantity++;
    setTotalPrice(((100 * totalPrice + 100 * product.price) / 100).toFixed(2));
    setCartItems([...cartItems]);
  }

  function decrementQuantity(product) {
    product.quantity--;
    setTotalPrice(((100 * totalPrice - 100 * product.price) / 100).toFixed(2));
    setCartItems([...cartItems.filter((item) => item.quantity)]);
  }

  return (
    <div className="App">
      <Products addToCart={addToCart} />
      <ShoppingCart
        totalPrice={totalPrice}
        cartItems={cartItems}
        discardItem={discardItem}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        setCartDisplay={setCartDisplay}
        cartDisplay={cartDisplay}
      />
    </div>
  );
}

export default App;
