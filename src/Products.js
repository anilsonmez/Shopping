import ALL_PRODUCTS from "./ALL_PRODUCTS";
import ProductCard from "./ProductCard";

const Products = () => {
  function addToCart() {
    console.log("here");
  }
  return (
    <div className="products">
      {ALL_PRODUCTS.map((product) => (
        <ProductCard
          product={product}
          onClickHandler={addToCart}
          key={product.id}
        />
      ))}
    </div>
  );
};
export default Products;
