import CartProductCard from "./CartProductCard";

const ShoppingCart = ({
  totalPrice,
  cartItems,
  discardItem,
  incrementQuantity,
  decrementQuantity,
  setCartDisplay,
  cartDisplay,
}) => {
  return (
    <div className="shopping-cart">
      <div className="cart-content" style={{ display: cartDisplay }}>
        {cartItems.map((product) => (
          <CartProductCard
            product={product}
            discardItem={discardItem}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            key={product.id}
          />
        ))}
      </div>
      <button
        className="shopping-cart-dropdown"
        onClick={() =>
          setCartDisplay(() => {
            if (cartDisplay === "none") {
              return "block";
            } else {
              return "none";
            }
          })
        }
      >
        Total: {totalPrice}
      </button>
    </div>
  );
};

export default ShoppingCart;
