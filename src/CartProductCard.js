const CartProductCard = ({
  product,
  discardItem,
  incrementQuantity,
  decrementQuantity,
}) => {
  const productPrice = product.price.toFixed(2);
  return (
    <li>
      <div className="cart-product-name">{product.name}</div>
      <div className="cart-product-price">{productPrice} TL</div>
      <div className="cart-product-quantity">
        <button
          className="decrement"
          onClick={() => decrementQuantity(product)}
        >
          -
        </button>
        <span className="quantity">{product.quantity}</span>
        <button
          className="increment"
          onClick={() => incrementQuantity(product)}
        >
          +
        </button>
      </div>
      <button className="discard-item" onClick={() => discardItem(product)}>
        X
      </button>
    </li>
  );
};

export default CartProductCard;
