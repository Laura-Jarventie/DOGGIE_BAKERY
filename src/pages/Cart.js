import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../store/actions";

const Cart = () => {
  const dispatch = useDispatch();
  console.log(Cart);
  const cartItems = useSelector((state) => state.cart);
  let subtotal = 0;
  let total = 0;

  return (
    <>
      <main className="cart">
        {cartItems.length <= 0 && (
          <p>
            No items in the cart, your dog is waiting for his/hers cupcake....
          </p>
        )}
        <ul>
          {cartItems.map(
            (cartItem) => (
              (subtotal = cartItem.quantity * cartItem.price),
              (total = cartItems.reduce(
                (total, item) => total + item.subtotal
              )),
              (
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
                    <button
                      onClick={() => dispatch(removeFromCart(cartItem.id))}
                    >
                      Remove
                    </button>
                  </div>

                  <div>subtotal: ${subtotal} </div>
                </li>
              )
            )
          )}
        </ul>
        <p>Total:${(cartItems, total)}</p>
      </main>
    </>
  );
};

export default Cart;

//const total = cartItems.reduce((total, item) => total + item.subtotal, 0);
// <p>Total:{(cartItems, total)}</p>

/* export const total = () => {
  const items = useSelector((state) => state.cart);
  items.reduce((total, item) => total + item.subtotal, 0);
  return <p> totaali:{(items, Total)} </p>;
};
 */
