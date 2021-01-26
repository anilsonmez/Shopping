import CartProductCard from "./CartProductCard";

const ShoppingCart = ({ totalPrice, cartItems, discardItem }) => {
  return (
    <div className="shopping-cart">
      <div className="total-price">{totalPrice}</div>
      <div className="cart-content">
        {cartItems.map((product) => (
          <CartProductCard
            product={product}
            onClickHandler={discardItem}
            key={product.id}
            quantity={product.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
