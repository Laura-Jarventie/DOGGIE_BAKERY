import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Tooltip from "react-bootstrap/Tooltip";
import { addToCart } from "../store/actions";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

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

/* 
 const [show, setShow] = useState(false);
  const target = useRef(null);
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>Product added to cart</Popover.Body>
    </Popover>
  );
const popover = (
    <Popover id="popover-basic">
      <Popover.Body>Product added to cart</Popover.Body>
    </Popover>
  );
  
  <div key={product.id}>
      <ul>
        {products.map((product) => (
          <li id={product.id}
            {product.item}
            <p>{product.price}€</p>
            <p>
              {
                <OverlayTrigger
                  trigger="click"
                  rootClose
                  placement="right"
                  overlay={popover}
                >
                  <button onClick={() => dispatch(addToCart(product))}>
                    Add to Cart
                  </button>
                </OverlayTrigger>
              }
            </p>
            </li>
         
        ))}
        </ul>
        </div> 
        
         <OverlayTrigger
              trigger="click"
              rootClose
              placement="right"
              overlay={popover}
            >
              <button
                ref={target}
                onClick={() => dispatch(addToCart(product)) && setShow(!show)}
              >
                Add to Cart
              </button>
            </OverlayTrigger>
            */
