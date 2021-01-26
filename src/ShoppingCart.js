import CartProductCard from "./CartProductCard";

const ShoppingCart = ({
  totalPrice,
  cartItems,
  discardItem,
  incrementQuantity,
  decrementQuantity,
}) => {
  return (
    <div className="shopping-cart">
      <div className="total-price">{totalPrice}</div>
      <div className="cart-content">
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
    </div>
  );
};

export default ShoppingCart;
