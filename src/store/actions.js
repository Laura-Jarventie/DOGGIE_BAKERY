import { getProducts, getCart } from "../services/products";

export const INIT_PRODUCTS = "INIT_PRODUCTS";
export const INIT_CARTPRODUCTS = "INIT_CARTPRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const initializeProducts = () => {
  return async (dispatch) => {
    const products = await getProducts();
    dispatch({
      type: INIT_PRODUCTS,
      payload: products,
    });
  };
};

export const initializeCart = () => {
  return async (dispatch) => {
    const cart = await getCart();
    dispatch({
      type: INIT_CARTPRODUCTS,
      payload: cart,
    });
  };
};

export const addToCart = (product) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
};

export const removeFromCart = (productId) => {
  return async (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productId,
    });
  };
};
