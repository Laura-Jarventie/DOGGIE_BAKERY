import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/actions";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.item}
            <p>{product.price}€</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
