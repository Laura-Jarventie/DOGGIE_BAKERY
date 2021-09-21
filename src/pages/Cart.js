import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../store/actions";

const Cart = () => {
  const dispatch = useDispatch();
  console.log(Cart);
  const cartItems = useSelector((state) => state.cart);
  return (
    <>
      <main className="cart">
        {cartItems.length <= 0 && (
          <p>
            No items in the cart, your dog is waiting for his/hers cupcake....
          </p>
        )}
        <ul>
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.item}</strong> ${cartItem.price}
                <div>
                  quantity: {cartItem.quantity}
                  {/* {cartItem.style} mulla ei tätä*/}
                </div>
              </div>
              <div>
                <button onClick={() => dispatch(addToCart(cartItem))}>
                  Add one more
                </button>
              </div>
              <div>
                <button onClick={() => dispatch(removeFromCart(cartItem.id))}>
                  Remove
                </button>
              </div>

              <div>
                total:
                {/*
                let sum = (cartItem)*(cartItem.price);
                {sum}
                */}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
    /* return (
      <div>Total cart:</div>
      {cartItems}
    ); */
  );
};

export default Cart;
