import React from "react";
import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripePayment from "../../components/stripe-payment/stripe-payment";
import SplitForm from "../../components/stripe-payment/stripe-payment";
import "./checkout.styles.scss";

import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const CheckoutPage = () => {
  const { cartItems, cartTotal, cartCount } = useContext(CartContext);
  console.log(`Cart Count is " ${cartCount}`);

  const item = {
    price: "price_1La6KTFBFgFoBCrCdtdmtD0J",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: "http://localhost:3000/checkout/success",
    cancelUrl: "http://localhost:3000/checkout/cancel",
  };

  const redirectToCheckout = async () => {
    console.log("redirectToCheckout");
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe Checkout Error " + error);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${cartTotal}.00</div>
      <button onClick={redirectToCheckout}>Checkout</button>
    </div>
  );
};

export default CheckoutPage;
