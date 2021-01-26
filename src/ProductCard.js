const ProductCard = ({ product, onClickHandler }) => {
  //Show product price as two digits after decimal
  const productPrice = product.price.toFixed(2);
  return (
    <li>
      <div className="product-name">{product.name}</div>
      <div className="product price">{productPrice} TL</div>
      <button onClick={() => onClickHandler(product)}>Add to Cart</button>
    </li>
  );
};

export default ProductCard;
