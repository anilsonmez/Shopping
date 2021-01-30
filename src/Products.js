import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Spinner from "react-bootstrap/Spinner";

const Products = ({ addToCart }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loadingState, setLoadingState] = useState("loading");
  useEffect(() => {
    let isSuccessfull = "loading";
    fetch("https://my-json-server.typicode.com/anilsonmez/Shopping/posts")
      .then((response) => {
        if (response.ok) {
          isSuccessfull = "successfull";
          return response.json();
        } else {
          isSuccessfull = "failed";
          return [];
        }
      })
      .then((json) => {
        setAllProducts(json);
        setLoadingState(isSuccessfull);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ul className="products">
      {loadingState === "loading" && (
        <Spinner animation="border" role="status" variant="danger">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      {loadingState === "successfull" &&
        allProducts.map((product) => (
          <ProductCard
            product={product}
            onClickHandler={addToCart}
            key={product.id}
          />
        ))}
      {loadingState === "failed" && (
        <div>Uuups we cannot get product data from server</div>
      )}
    </ul>
  );
};
export default Products;
