const CartProductCard = ({ product, onClickHandler }) => {
  //Show product price as two digits after decimal
  const productPrice = product.price.toFixed(2);
  return (
    <li>
      <div className="cart-product-name">{product.name}</div>
      <div className="cart-product price">{productPrice} TL</div>
      <div className="cart-product-quantity">{product.quantity}</div>
      <button onClick={() => onClickHandler(product)}>X</button>
    </li>
  );
};

export default CartProductCard;
