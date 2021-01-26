import ALL_PRODUCTS from "./ALL_PRODUCTS";
import ProductCard from "./ProductCard";

const Products = ({ addToCart }) => {
  return (
    <ul className="products">
      {ALL_PRODUCTS.map((product) => (
        <ProductCard
          product={product}
          onClickHandler={addToCart}
          key={product.id}
        />
      ))}
    </ul>
  );
};
export default Products;
