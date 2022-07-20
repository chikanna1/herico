import React from "react";
import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutPage = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      <h1>Checkout Page</h1>

      <div>
        {cartItems.map((cartItem) => {
          const { id, productName, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{productName}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeItemFromCart(cartItem)}>
                decrement
              </span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutPage;
